import { Module,forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from 'src/user/user.module';
import { AuthController } from './auths.controller';
import { AuthService } from './auths.service';



import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { LocalStrategy } from './guards/local_strategy';

@Module({
  imports: [
          
         forwardRef(() => UserModule),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'secret',
        signOptions: { expiresIn: '3600s' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtGuard,LocalStrategy, JwtStrategy],
 
})

export class AuthModule {}