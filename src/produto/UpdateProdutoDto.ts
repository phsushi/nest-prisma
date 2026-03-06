import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator"

export class UpdateProdutoDto {

    @IsString()
    @IsOptional()
    nomeProduto?: string

    @IsString()
    @IsOptional()
    descricao?:string

    @IsNumber()
    @IsPositive()
    @IsOptional()
    preco?:number

    @IsNumber()
    @IsPositive()
    @IsOptional()
    qtdProdutos?:number
}