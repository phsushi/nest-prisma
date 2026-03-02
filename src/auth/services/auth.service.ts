import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async signIn(email: string, pass:string){
        const user = await this.userService.findOne(email);

        if(user?.password !== pass){
             throw new UnauthorizedException();
        }
        const payload = {sub:user.idUser, email: user.email}

        return {access_token: await this.jwtService.signAsync(payload)};
    }
}
