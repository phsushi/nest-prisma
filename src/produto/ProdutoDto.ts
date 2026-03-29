import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from "class-validator"

export class ProdutoDto {

    id: number

    @IsNotEmpty()
    @IsString()
    nomeProduto: string

    @IsString()
    descricao:string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    preco:number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    quantidadeEstoque: number

    @Max(5)
    @Min(0)
    avaliacao: number

    @IsNotEmpty()
    @IsNumber()
    vendedorId:number
}