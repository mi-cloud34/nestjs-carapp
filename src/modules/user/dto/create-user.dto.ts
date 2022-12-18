import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  public readonly name: string;

  public readonly email: string;

  public readonly password: string;

  public readonly role: string;

  public readonly createdAt: string;

  public readonly place: string;

  public readonly image: string;

  public readonly blocked: string;
}
