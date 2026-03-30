import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from '../signInDto';
import { AuthGuard } from '../guards/auth/auth.guard';
import { EnderecoDto } from '../enderecoDto';
import { EnderecoService } from 'src/users/services/endereco/endereco.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private enderecoService: EnderecoService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UsePipes(new ValidationPipe)
    signIn(@Body() singInDto: SignInDto){
        return this.authService.signIn(singInDto.email, singInDto.senha);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }

    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe)
    @Post('endereco')
    createAddress(@Body() endereco: EnderecoDto, @Request() req){
        const email:string = req.user.email
        return this.enderecoService.createAddress(email, endereco);
    }
}
