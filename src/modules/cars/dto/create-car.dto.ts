import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Color } from 'src/modules/colors/entities/color.entity';
import { Km } from 'src/modules/kms/entities/km.entity';
import { Model } from 'src/modules/models/entities/model.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Year } from 'src/modules/years/entities/year.entity';

export class CreateCarDto {
  @IsString()
  @MaxLength(5)
  @IsNotEmpty()
  public readonly carname: string;

  public readonly modelId: Model;

  public readonly colorId: Color;

  public readonly yearId: Year;

  public readonly kmId: Km;

  public readonly price: number;

  public readonly lt: number;

  public readonly lg: number;

  public readonly carimage: number;

  public readonly userId: User;
}
