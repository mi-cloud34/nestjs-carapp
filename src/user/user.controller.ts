import { Controller, Get, Post, Body, Patch, Param, Delete, forwardRef, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserService } from './user.service';
 

@Controller('users') 
  export class UserController {
  constructor( @Inject(forwardRef(() => UserService)) private readonly usersService: UserService) {}

  @Post()
  create(@Body()createUserDto: CreateUserDto ) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}