import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Color } from 'src/modules/colors/entities/color.entity';
import { Km } from 'src/modules/kms/entities/km.entity';
import { Model } from 'src/modules/models/entities/model.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Year } from 'src/modules/years/entities/year.entity';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ require: true })
  public carname: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Model' })
  public modelId: Model;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Color' })
  public colorId: Color;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Year' })
  public yearId: Year;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Km' })
  public kmId: Km;

  @Prop({ required: true })
  public price: number;

  @Prop({ required: true })
  public lt: number;

  @Prop({ required: true })
  public lg: number;

  //@Prop({required: true})
  public carimage: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  public userId: User;
}

export const CarSchema = SchemaFactory.createForClass(Car);
