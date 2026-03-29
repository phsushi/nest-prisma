import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserDto } from 'src/users/userDto';
import { SignInDto } from '../signInDto';
import { AuthGuard } from '../guards/auth/auth.guard';

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
    getProfile(@Request() req){
        return req.user;
    }
}
