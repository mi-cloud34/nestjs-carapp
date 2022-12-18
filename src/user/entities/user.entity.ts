import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

export class User {
  @Prop({ require: true })
  public name: string;

  @Prop({
    require: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide e valid email',
    ],
  })
  public email: string;

  @Prop({ require: true, minlength: 6, select: false })
  public password: string;

  @Prop({ require: true, enum: ['user', 'admin'] })
  public role: string;

  @Prop({ default: Date.now })
  public createdAt: Date;

  @Prop({ require: true })
  public place: string;

  @Prop({ require: true })
  public image: string;

  @Prop({ default: false })
  public blocked: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
