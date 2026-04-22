import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class VendedorUpgradeUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cpf: string
}