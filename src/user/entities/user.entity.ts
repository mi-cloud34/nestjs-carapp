import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;
export class User {
  @Prop({ require: true })
  name: string;
  @Prop({
    require: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide e valid email',
    ],
  })
  email: string;
  @Prop({ require: true, minlength: 6, select: false, })
  password: string;
  @Prop({ require: true ,enum: ['user', 'admin'] })
  role: string;
  @Prop({ default: Date.now })
  createdAt: Date;
  @Prop({ require: true })
  place: string;
  @Prop({ require: true })
  image: string;
  @Prop({ default: false })
  blocked: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);