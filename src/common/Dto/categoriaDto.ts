import { IsNotEmpty, IsString } from "class-validator"

export class CategoriaDto {
    id: number

    @IsNotEmpty()
    @IsString()
    nome: string
}