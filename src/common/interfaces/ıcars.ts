import { Color } from 'src/modules/colors/entities/color.entity';
import { Km } from 'src/modules/kms/entities/km.entity';
import { Model } from 'src/modules/models/entities/model.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Year } from 'src/modules/years/entities/year.entity';

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
