import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Delete, Param, ParseIntPipe, Put} from '@nestjs/common';
import { CategoriaService } from 'src/categoria/service/categoria.service';
import { CategoriaDto } from 'src/common/Dto/categoriaDto';
import { UpdateCategoriaDto } from 'src/common/Dto/updateCategoriaDto';

@Controller('categoria')
export class CategoriaController {
    constructor(private categoriaService: CategoriaService){}
    

    @Post('create')
    @UsePipes(new ValidationPipe)
    createCategoria(@Body() categoriaData: CategoriaDto){
        return this.categoriaService.createCategoria(categoriaData);
    }

    @Get()
    fetchAllCategoria(){
        return this.categoriaService.fetchAll();
    }
    @Delete('delete/:id')
    @UsePipes(new ValidationPipe)
    deleteCategoria(@Param('id', ParseIntPipe) idCategoria:number){
        return this.categoriaService.deleteCategoria(idCategoria);
    }
    @Put('update/:id')
    @UsePipes(new ValidationPipe)
    updateCategoria(@Param('id', ParseIntPipe) idCategoria, @Body() updateCategoriaData: UpdateCategoriaDto){
        return this.categoriaService.updateCategoria(idCategoria,updateCategoriaData);
    }

}
