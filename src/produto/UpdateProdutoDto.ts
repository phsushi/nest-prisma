import { IsNumber, IsOptional, IsPositive, IsString, Max, Min } from "class-validator"

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
    quantidadeEstoque?:number

    @Max(5)
    @Min(0)
    avaliacao?:number
}