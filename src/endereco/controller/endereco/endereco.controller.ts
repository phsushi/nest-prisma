import { Body, Controller, Delete, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe, Request } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth/auth.guard';
import { EnderecoDto } from 'src/common/Dto/enderecoDto';
import { EnderecoService } from 'src/endereco/services/endereco/endereco.service';

@Controller('endereco')
export class EnderecoController {

    constructor(private enderecoService: EnderecoService){}
    
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe)
    @Post('create')
    createAddress(@Body() endereco: EnderecoDto, @Request() req){
        const email:string = req.user.email;
        return this.enderecoService.createAddress(email, endereco);
    }
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe)
    @Delete('delete/:id')
    deleteAddress(@Param('id', ParseIntPipe) idEndereco:number, @Request() req){
        const email:string = req.user.email;
        return this.enderecoService.deleteAddress(email, idEndereco);

    }

}
