import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator"

export class UserDto  {
   
    id:number
    
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nomeCompleto: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(6,{message: "Mínimo de 6 caracteres para senha."})
    senha: string

    @ApiProperty()
    @IsPhoneNumber("BR")
    telefone: string

}