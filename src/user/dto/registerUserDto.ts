import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export  class RegisterUserDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(6)
    readonly name:string;
    @IsString()
    @IsNotEmpty()
    readonly email: string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
     password: string;
    readonly role: string;
    readonly createdAt: Date;
    readonly place: string;
    readonly image: string;
    readonly blocked: boolean;
}