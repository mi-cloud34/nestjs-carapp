import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(6)
  public readonly name: string;

  @IsString()
  @IsNotEmpty()
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(8)
  public readonly password: string;
}
