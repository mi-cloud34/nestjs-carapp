import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateColorDto {

    @IsString()
    @MaxLength(5)
    @IsNotEmpty()
    readonly name:string;
    @IsString()
    readonly description:string
    @IsString()
    readonly userId:string
}
