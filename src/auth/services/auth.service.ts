import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async signIn(email: string, pass:string){
        
        //Verifica se o usuário existe no banco
        const user = await this.userService.findOne(email);
        if(!user){
            throw new UnauthorizedException();
        }

        //Checa se a senha está correta
        const isMatch = await bcrypt.compare(pass, user.senha);
        if(!isMatch){
            throw new UnauthorizedException();
        }

        const payload = {sub: user.id, email: user.email}
        return {access_token: await this.jwtService.signAsync(payload)};
    }
}
