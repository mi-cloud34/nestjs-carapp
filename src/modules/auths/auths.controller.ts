import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IUser } from 'src/common/interfaces/user.interface';
import { CreateUserDto } from 'src/modules/user/dto/createUserDto';
import { LoginUserDto } from 'src/modules/user/dto/loginUserDto';
import { AuthService } from './auths.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  public async register(@Body() user: CreateUserDto): Promise<IUser | null> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Body() user: LoginUserDto,
  ): Promise<{ token: string } | null> {
    return this.authService.login(user);
  }

  @Post('verify-jwt')
  @HttpCode(HttpStatus.OK)
  public async verifyJwt(
    @Body() payload: { jwt: string },
  ): Promise<{ exp: number }> {
    return this.authService.verifyJwt(payload.jwt);
  }
}
