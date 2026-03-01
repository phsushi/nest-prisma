import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UserDto  {

    id:number
    
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    username: string

}