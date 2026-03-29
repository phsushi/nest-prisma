import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SignInDto  {

    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    senha: string

}