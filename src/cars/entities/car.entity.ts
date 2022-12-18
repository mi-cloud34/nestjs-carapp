import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";
import { Color } from "src/colors/entities/color.entity";
import { Km } from "src/kms/entities/km.entity";
import { Model } from "src/models/entities/model.entity";
import { User } from "src/user/entities/user.entity";

export type CarDocument = Car & Document;
@Schema()
export class Car {
    @Prop({require:true})
    carname:string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Model' })
    modelId: Model
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Color' })
    colorId: Color
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Km' })
    kmId: Km
    @Prop({required: true})
    price: number;
    @Prop({required: true})
    lt: number;
    @Prop({required: true})
    lg: number;
   //@Prop({required: true})
    carimage: number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: User
}
export const CarSchema = SchemaFactory.createForClass(Car);