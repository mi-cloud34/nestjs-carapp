import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Res,
  Put,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { IRepository } from 'src/common/repositories/repository.interface';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Controller('cars')
export class CarsController {
  constructor(
    @Inject(forwardRef(() => CarsService))
    private readonly carsService: IRepository<Car>,
  ) {}

  @Post()
  public async createStudent(
    @Res() response,
    @Body() createCarDto: CreateCarDto,
  ): Promise<any> {
    try {
      const newCar = await this.carsService.create(createCarDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created successfully',
        newCar,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  public async getStudents(@Res() response): Promise<any> {
    try {
      const carData = await this.carsService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        carData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  public async findOne(@Res() response, @Param('id') id: string): Promise<any> {
    try {
      const existingStudent = await this.carsService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: 'Student found successfully',
        existingStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  public async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCarDto,
  ): Promise<any> {
    try {
      const existingStudent = await this.carsService.update(id, updateCartDto);
      return response.status(HttpStatus.OK).json({
        message: 'Student has been successfully updated',
        existingStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  public async remove(@Res() response, @Param('id') id: string): Promise<any> {
    try {
      const deleteCar = await this.carsService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: 'Student deleted successfully',
        deleteCar,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
