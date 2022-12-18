import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICar } from 'src/common/interfaces/cars.interface';
import { IRepository } from 'src/common/repositories/repository.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService implements IRepository<ICar> {
  constructor(@InjectModel(Car.name) private carModel: Model<ICar>) {}

  public async create(createCarDto: CreateCarDto): Promise<ICar> {
    const newCar = new this.carModel(createCarDto);
    return await newCar.save();
  }

  public async findAll(): Promise<ICar[]> {
    return await this.carModel.find().exec();
    // return  await this.carModel.find().populate({path:'Color', select:'name description userId'}).exec();
  }

  public async findOne(id: string): Promise<ICar> {
    return await this.carModel.findById(id).exec();
  }

  public async update(carId: string, t: Partial<UpdateCarDto>): Promise<ICar> {
    return await this.carModel.findByIdAndUpdate(carId, t, { new: true });
  }

  public async remove(id: string): Promise<ICar> {
    return this.carModel.remove(id);
  }
}
