import { Color } from 'src/colors/entities/color.entity';
import { Km } from 'src/kms/entities/km.entity';
import { Model } from 'src/models/entities/model.entity';
import { User } from 'src/user/entities/user.entity';
import { Year } from 'src/years/entities/year.entity';

export interface ICar extends Document {
  readonly carname: string;
  readonly modelId: Model;
  readonly colorId: Color;
  readonly yearId: Year;
  readonly kmId: Km;
  readonly price: number;
  readonly lt: number;
  readonly lg: number;
  readonly carimage: number;
  readonly userId: User;
}
