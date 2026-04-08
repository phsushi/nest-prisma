import { Controller } from '@nestjs/common';
import { VendedorService } from 'src/users/services/vendedor/vendedor.service';

@Controller('vendedor')
export class VendedorController {
    constructor(private vendedorService: VendedorService){}

    
}
