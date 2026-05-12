import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe, Request } from '@nestjs/common';
import { VendedorNovoDto } from 'src/common/Dto/vendedorNovoDto';
import { VendedorUpgradeUserDto } from 'src/common/Dto/vendedorUpgradeUserDto';
import { AuthGuard } from 'src/common/guards/auth/auth.guard';
import { VendedorService } from 'src/users/services/vendedor/vendedor.service';

@Controller('vendedor')
export class VendedorController {
    constructor(private vendedorService: VendedorService){}

    @Post('create')
    @UsePipes(new ValidationPipe)
    createNovoVendedor(@Body() vendedorData: VendedorNovoDto){
        return this.vendedorService.createNovoVendedor(vendedorData);
    }

    @Post('upgrade')
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe)
    upgradeUserToVendedor(@Body() vendedorData: VendedorUpgradeUserDto, @Request() req){
        const email:string = req.user.email;

        return this.vendedorService.upgradeUserToVendedor(email, vendedorData);
    }

    //Listar meus produtos
}
