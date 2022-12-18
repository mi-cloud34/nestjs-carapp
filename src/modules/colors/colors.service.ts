import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IColor } from 'src/common/interfaces/ıcolors';
import { IRepository } from 'src/repositories/ırepositories';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';

@Injectable()
export class ColorsService implements IRepository<IColor> {
  constructor(@InjectModel(Color.name) private colorModel: Model<IColor>) {}

  public async create(createColorDto: CreateColorDto): Promise<IColor> {
    const newCar = new this.colorModel(createColorDto);
    return await newCar.save();
  }

  public async findAll(): Promise<IColor[]> {
    return await this.colorModel.find();
  }

  public async findOne(id: string): Promise<IColor> {
    return await this.colorModel.findById(id).exec();
  }

  public async update(
    carId: string,
    t: Partial<UpdateColorDto>,
  ): Promise<IColor> {
    return await this.colorModel.findByIdAndUpdate(carId, t, { new: true });
  }

  public async remove(id: string): Promise<IColor> {
    return this.colorModel.remove(id);
  }
}
