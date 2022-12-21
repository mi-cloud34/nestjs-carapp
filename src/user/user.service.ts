import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IUser } from "src/interfaces/iuser";
import { CreateUserDto } from "./dto/createUserDto";
import { RegisterUserDto } from "./dto/registerUserDto";
import { UpdateUserDto } from "./dto/updateUserDto";
import { User, UserDocument } from "./entities/user.entity";
 
@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  _getUserDetails(user: User):User {
     return user;
    {
    //   id: user._id,
    //   name: user.name,
    //   email: user.email,
    // };
  }
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return user;
  }
 async findAll():Promise<IUser[]>{
  return await this.userModel.find();
 }
 async findOne(id:string):Promise<IUser>{
  return await this.userModel.findById(id);
 }
/*   async create( newUser:CreateUserDto, //hashedPassword:string
  ): Promise<IUser> {
  
   return new this.userModel(
      newUser,//hashedPassword
    );
  } */
  async create(data:CreateUserDto): Promise<User> {
    const newCar =await this.userModel.create(data) 
    return  newCar;
  }
  async remove(id:string):Promise<IUser>{
    return await this.userModel.findByIdAndDelete(id)
  }
  async update(id:string,updateUser:UpdateUserDto):Promise<User>{
    return await this.userModel.findByIdAndUpdate(id,updateUser)
  }

}