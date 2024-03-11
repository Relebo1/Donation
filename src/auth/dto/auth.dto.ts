/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class AuthDto {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Length(6, 20, { message: 'Password has ro be between 6 snd 20 chars' })
    public password: string;

}