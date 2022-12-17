import { Controller, Get, Post, Body, Param, Delete, HttpStatus, Res, Put, Inject, forwardRef } from '@nestjs/common';

import { IRepository } from 'src/repositories/ırepositories';
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';

@Controller('colors')
export class ColorsController {
  constructor( @Inject(forwardRef(() => ColorsService)) private readonly colorsService: IRepository<Color>) {}

  @Post()
  async createColor(@Res() response, @Body() createColorDto: CreateColorDto) {
 try {
   const newCar = await this.colorsService.create(createColorDto);
   return response.status(HttpStatus.CREATED).json({
   message: 'Color has been created successfully',
   newCar});
} catch (err) {
   return response.status(HttpStatus.BAD_REQUEST).json({
   statusCode: 400,
   message: 'Error: Color not created!',
   error: 'Bad Request'
});
}
}
  @Get()
async getColor(@Res() response) {
try {
  const colorData = await this.colorsService.findAll();
  return response.status(HttpStatus.OK).json({
  message: 'All color data found successfully',colorData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}

  @Get('/:id')
  async findOne(@Res() response, @Param('id') id: string) {
   try {
      const existingColor = await
  this.colorsService.findOne(id);
      return response.status(HttpStatus.OK).json({
      message: 'Student found successfully',existingColor,});
   } catch (err) {
     return response.status(err.status).json(err.response);
   }
  }

  @Put('/:id')
async update(@Res() response,@Param('id') id: string,
@Body() updateColorDto: UpdateColorDto) {
  try {
   const existingColor = await this.colorsService.update(id, updateColorDto);
  return response.status(HttpStatus.OK).json({
  message: 'Color has been successfully updated',
  existingColor,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}
  @Delete('/:id')
  async remove(@Res() response, @Param('id') id: string)
  {
    try {
      const deleteColor = await this.colorsService.remove(id);
      return response.status(HttpStatus.OK).json({
      message: 'Color deleted successfully',
      deleteColor,});
    }catch (err) {
      return response.status(err.status).json(err.response);
    }
   }

}
