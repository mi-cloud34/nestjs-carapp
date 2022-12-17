import { Body, Controller, forwardRef, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { IUser } from 'src/interfaces/iuser';
import { IRepository } from 'src/repositories/ırepositories';

import { CreateUserDto } from 'src/user/dto/createUserDto';
import { LoginUserDto } from 'src/user/dto/loginUserDto';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auths.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() user: CreateUserDto): Promise<IUser | null> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() user: LoginUserDto): Promise<{ token: string } | null> {
    return this.authService.login(user);
  }

  @Post('verify-jwt')
  @HttpCode(HttpStatus.OK)
  verifyJwt(@Body() payload: { jwt: string }) {
    return this.authService.verifyJwt(payload.jwt);
  }
}