import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Color } from 'src/colors/entities/color.entity';
import { Km } from 'src/kms/entities/km.entity';
import { Model } from 'src/models/entities/model.entity';
import { User } from 'src/user/entities/user.entity';
import { Year } from 'src/years/entities/year.entity';

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
