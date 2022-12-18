import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateColorDto {
  @IsString()
  @MaxLength(5)
  @IsNotEmpty()
  public readonly name: string;

  @IsString()
  public readonly description: string;

  @IsString()
  public readonly userId: string;
}
