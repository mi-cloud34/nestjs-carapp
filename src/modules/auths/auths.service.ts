import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUser } from 'src/common/interfaces/iuser';
import { CreateUserDto } from 'src/modules/user/dto/createUserDto';
import { LoginUserDto } from 'src/modules/user/dto/loginUserDto';
import { RegisterUserDto } from 'src/modules/user/dto/registerUserDto';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  public async register(user: Readonly<RegisterUserDto>): Promise<IUser | any> {
    const { email, password } = user;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser)
      throw new HttpException(
        'An account with that email already exists!',
        HttpStatus.CONFLICT,
      );

    const hashedPassword = await this.hashPassword(password);
    let newUser1: CreateUserDto;
    const newUser = await this.userService.create(newUser1, hashedPassword);
    return this.userService._getUserDetails(newUser);
  }

  public async doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  public async validateUser(
    email: string,
    password: string,
  ): Promise<IUser | null> {
    const user = await this.userService.findByEmail(email);
    const doesUserExist = !!user;

    if (!doesUserExist) return null;

    const doesPasswordMatch = await this.doesPasswordMatch(
      password,
      user.password,
    );

    if (!doesPasswordMatch) return null;

    return this.userService._getUserDetails(user);
  }

  public async login(
    existingUser: LoginUserDto,
  ): Promise<{ token: string } | null> {
    const { email, password } = existingUser;
    const user = await this.validateUser(email, password);

    if (!user)
      throw new HttpException('Credentials invalid!', HttpStatus.UNAUTHORIZED);

    const jwt = await this.jwtService.signAsync({ user });
    return { token: jwt };
  }

  public async verifyJwt(jwt: string): Promise<{ exp: number }> {
    try {
      const { exp } = await this.jwtService.verifyAsync(jwt);
      return { exp };
    } catch (error) {
      throw new HttpException('Invalid JWT', HttpStatus.UNAUTHORIZED);
    }
  }
}
