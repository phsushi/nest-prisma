import { IsNumber, IsOptional, IsPositive, IsString, Max, Min } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class UpdateProdutoDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    nomeProduto?: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    descricao?:string

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    preco?:number

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    quantidadeEstoque?:number

    @ApiProperty()
    @Max(5)
    @Min(0)
    avaliacao?:number
}