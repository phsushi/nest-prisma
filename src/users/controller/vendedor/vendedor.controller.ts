import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { VendedorNovoDto } from 'src/common/Dto/vendedorNovoDto';
import { VendedorService } from 'src/users/services/vendedor/vendedor.service';

@Controller('vendedor')
export class VendedorController {
    constructor(private vendedorService: VendedorService){}

    @Post('create')
    @UsePipes(new ValidationPipe)
    createNovoVendedor(@Body() vendedorData: VendedorNovoDto){
        return this.vendedorService.createNovoVendedor(vendedorData);
    }

}
