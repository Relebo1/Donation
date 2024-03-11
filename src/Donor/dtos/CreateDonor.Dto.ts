/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class createDonorDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    @IsNumber()
    phoneNumber: number;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    @IsString()
    paymentMethod: string;
}