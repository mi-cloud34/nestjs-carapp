import { IsBoolean, isBoolean, IsDateString, IsNotEmpty, IsString, IS_EMAIL, MaxLength, MinLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    readonly email: string;
    @IsString()
    password: string;
    // @IsString()
    // readonly role: string; 
    // @IsDateString()
    // readonly createdAt: Date;
    // @IsString()
    // readonly place: string;
    // @IsString()
    // readonly image: string;
    // @IsBoolean()
    // readonly blocked: boolean;
   
}