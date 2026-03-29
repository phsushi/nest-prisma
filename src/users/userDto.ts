import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator"

export class UserDto  {

    id:number
    
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    nomeCompleto: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6,{message: "Mínimo de 6 caracteres para senha."})
    senha: string

    @IsPhoneNumber()
    telefone: string

}