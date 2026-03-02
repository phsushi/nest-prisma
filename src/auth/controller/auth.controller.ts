import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserDto } from 'src/users/userDto';
import { SignInDto } from '../signInDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UsePipes(new ValidationPipe)
    signIn(@Body() singInDto: SignInDto){
        return this.authService.signIn(singInDto.email, singInDto.password);
    }
}
