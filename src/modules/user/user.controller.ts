import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { IUser } from 'src/common/interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
  ) {}

  @Post()
  public async create(
    @Body() createUserDto: CreateUserDto,
    password: string,
  ): Promise<IUser> {
    return this.usersService.create(createUserDto, password);
  }

  @Get()
  public async findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<IUser> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<IUser> {
    return this.usersService.remove(id);
  }
}
