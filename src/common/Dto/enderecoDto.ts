import { IsNotEmpty, IsPostalCode, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class EnderecoDto
{
    id:number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsPostalCode("BR")
    cep:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    ruaAvenida: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    complemento?: string


}