import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/iuser';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  public _getUserDetails(user: UserDocument): IUser {
    return user;
    {
      //   id: user._id,
      //   name: user.name,
      //   email: user.email,
      // };
    }
  }

  public async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  public async findById(id: string): Promise<IUser | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return this._getUserDetails(user);
  }

  public async findAll(): Promise<IUser[]> {
    return await this.userModel.find();
  }

  public async findOne(id: string): Promise<IUser> {
    return await this.userModel.findById(id);
  }

  public async create(
    newUser: CreateUserDto,
    hashedPassword: string,
  ): Promise<IUser> {
    return new this.userModel(newUser, hashedPassword);
  }

  public async remove(id: string): Promise<IUser> {
    return await this.userModel.findByIdAndDelete(id);
  }

  public async update(id: string, updateUser: UpdateUserDto): Promise<IUser> {
    return await this.userModel.findByIdAndUpdate(id, updateUser);
  }
}
