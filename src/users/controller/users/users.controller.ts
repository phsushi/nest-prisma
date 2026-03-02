import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { UserDto } from 'src/users/userDto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    async getUsers(){
        return await this.userService.fetchAllUsers();
    }

    @Post('signin')
    @UsePipes(new ValidationPipe)
    async signin(@Body() userData: UserDto){
        return await this.userService.createUser(userData);
    }
    @Delete('delete/:id')
    async deleteUser(@Param('id', ParseIntPipe) idUser: number){
        
        return await this.userService.deleteUser(idUser);
    }
}
