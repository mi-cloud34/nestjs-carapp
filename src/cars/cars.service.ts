import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Color } from 'src/colors/entities/color.entity';
import { ICar } from 'src/interfaces/ıcars';
import { IRepository } from 'src/repositories/ırepositories';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';
  
@Injectable()
export class CarsService implements IRepository<ICar>{
  
  constructor(@InjectModel(Car.name) private carModel:Model<ICar>) {
    
  }
 
  async create(createCarDto: CreateCarDto): Promise<ICar> {
    const newCar =new this.carModel(createCarDto);
    return await newCar.save();
 }
  async findAll(): Promise<ICar[]> {
    const car=await this.carModel.find();
   // return  await this.carModel.find().exec();
  /*  if (car) {
    await car.populate(opts:{path:'color', select:'name description userId'});
   } */
    return car;
}
  async findOne(id: string): Promise<ICar> {
    return  await this.carModel.findById(id).exec();
 }
  async update(carId: string, t: Partial<UpdateCarDto>): Promise<ICar> {
    return await this.carModel.findByIdAndUpdate(carId, t, { new: true });
}
 async remove(id: string): Promise<ICar> {
    return this.carModel.remove(id);
  }
}
function opts(opts: any, arg1: {}): ICar[] | PromiseLike<ICar[]> {
  throw new Error('Function not implemented.');
}

