/* import { UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

import { REPOSİTORY_SERVICE } from 'src/repositories/ırepositories';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { AuthService } from 'src/auths/auths.service';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'User',schema: UserSchema }])],
  controllers: [UserController],
  providers: [ UserService
    /* { 
    useClass:UserService,
    provide:REPOSİTORY_SERVICE
  } 
],exports: [UserService],
  
})
export class UserModule {} */

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./entities/user.entity";
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt';
@Module({
  imports:[MongooseModule.forFeatureAsync([{ name: 'User',
  useFactory: () => {
    const schema = UserSchema;

    schema.pre('findOneAndUpdate', async function () {
      const user = this.cast(this.model, this.getUpdate());
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        this.setUpdate(user);
      }
    });

    return schema;
  },

}])],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}