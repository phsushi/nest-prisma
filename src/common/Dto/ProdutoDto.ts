import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class ProdutoDto {

    id: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nomeProduto: string

    @ApiProperty()
    @IsString()
    descricao:string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    preco:number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    quantidadeEstoque: number

    @ApiProperty()
    @Max(5)
    @Min(0)
    avaliacao: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    usuarioId:number

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    categoriaId:number
}