import { UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

import { REPOSİTORY_SERVICE } from 'src/repositories/ırepositories';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auths/auths.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [
    UserService,
    /* { 
    useClass:UserService,
    provide:REPOSİTORY_SERVICE
  } */
  ],
  exports: [UserService],
})
export class UserModule {}
