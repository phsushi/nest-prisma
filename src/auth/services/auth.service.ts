import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async signIn(email: string, pass:string){
        const user = await this.userService.findOne(email);

        if(user?.password !== pass){
             throw new UnauthorizedException();
        }
        const {password, ...resultado} = user;

        return resultado;
    }
}
