import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"

export class ProdutoDto {

    idProduto: number

    @IsNotEmpty()
    @IsString()
    nomeProduto: string

    @IsString()
    descricao?:string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    preco:number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    qtdProduto: number

}