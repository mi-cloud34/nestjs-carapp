import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { ColorsModule } from './colors/colors.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auths/auths.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'nestcardb',
    }),
    /*  MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('databaseURI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }),
      inject: [ConfigService]
    }) */
    CarsModule,
    ColorsModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}