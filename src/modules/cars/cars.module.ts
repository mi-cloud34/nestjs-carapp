import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { REPOSİTORY_SERVICE } from 'src/common/repositories/repository.interface';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from './entities/car.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])],
  controllers: [CarsController],
  providers: [
    CarsService,
    /*  { 
    useClass:CarsService,
    provide:REPOSİTORY_SERVICE } */
  ],
})
export class CarsModule {}
