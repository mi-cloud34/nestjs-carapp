import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { ColorsModule } from './colors/colors.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'nestcardb'}),
   /*  MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('databaseURI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }),
      inject: [ConfigService]
    }) */
    CarsModule, ColorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
