import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export class User  extends mongoose.Document{
  @Prop({ require: true })
  name: string;
  @Prop({
    require: true,
    unique: true,
   /*  match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide e valid email',
    ], */
  })
  email: string;
  @Prop({ require: true,})
  password: string;
  // @Prop({ require: true ,enum: ['user', 'admin'] })
  // role: string;
  // @Prop({ default: Date.now })
  // createdAt: Date;
  // @Prop()
  // place: string;
  // @Prop({default:"img.jpg"})
  // image: string;
  // @Prop({ default: false })
  // blocked: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
