
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from "class-validator"
import { UserDto } from "./userDto"
import { ApiProperty } from "@nestjs/swagger"

export class VendedorNovoDto extends UserDto
{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cpf:string

}