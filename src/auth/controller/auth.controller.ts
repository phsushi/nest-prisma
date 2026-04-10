import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from '../../common/Dto/signInDto';
import { AuthGuard } from '../../common/guards/auth/auth.guard';



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UsePipes(new ValidationPipe)
    signIn(@Body() singInDto: SignInDto){
        return this.authService.signIn(singInDto.email, singInDto.senha);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    //Criar uma função própria para puxar os dados do usuário a partir de uma querry, não como está agora
    getProfile(@Request() req){
        return req.user;
    }
}
