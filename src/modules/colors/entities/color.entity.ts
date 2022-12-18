import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type ColorDocument = Color & Document;

@Schema()
export class Color {
  @Prop({ require: true })
  public name: string;

  @Prop()
  public description: string;

  @Prop()
  public userId: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // userId:User
}

export const ColorSchema = SchemaFactory.createForClass(Color);
