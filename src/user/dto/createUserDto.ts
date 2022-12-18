import { isEmail, IsNotEmpty, IsString, IS_EMAIL, MaxLength, MinLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    readonly name: string;
    readonly email: string;
    @IsString()
    password: string;
    readonly role: string;
    readonly createdAt: Date;
    readonly place: string;
    readonly image: string;
    readonly blocked: boolean;
   
}