import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { REPOSİTORY_SERVICE } from 'src/repositories/ırepositories';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorSchema } from './entities/color.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Color',schema: ColorSchema }])],
  controllers: [ColorsController],
  providers: [
    ColorsService
   /*  { 
    useClass:ColorsService,
    provide:REPOSİTORY_SERVICE
  } */
],

})
export class ColorsModule {}
