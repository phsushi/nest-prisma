import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class UserDto  {

    id:number
    
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6,{message: "Mínimo de 6 caracteres para senha."})
    password: string

}