import { IsNotEmpty, IsPostalCode, IsString } from "class-validator"

export class EnderecoDto
{
    id:number

    @IsNotEmpty()
    @IsString()
    @IsPostalCode("BR")
    cep:string

    @IsNotEmpty()
    @IsString()
    ruaAvenida: string

    @IsNotEmpty()
    @IsString()
    complemento?: string


}