import { IsNotEmpty, IsString, MaxLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    readonly createdAt: string;
    readonly place: string;
    readonly image: string;
    readonly blocked: string;
   
}