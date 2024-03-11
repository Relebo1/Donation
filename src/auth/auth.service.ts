/* eslint-disable prettier/prettier */

import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SECRET } from '../utils/constants';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private Jwt: JwtService) { }


    async signup(dto: AuthDto) {
        const { email, password } = dto;
        const foundUser = await this.prisma.userAccount.findUnique({ where: { email } })

        if (foundUser) {
            throw new BadRequestException("user with the same account already exists");
        }
        this.hashPassword(password);
        await this.prisma.userAccount.create({
            data: {
                email,
                password
            }
        })
        return dto;
    }

    async login(dto: AuthDto) {
        const { email, password } = dto;
        const foundUser = await this.prisma.userAccount.findUnique({ where: { email } })

        if (!foundUser) {
            throw new BadRequestException("Invalid email");
        }

        // const isMatch = await this.comparePassword({
        //     password,
        //     hash: foundUser.password,
        // });

        // if (!isMatch) {
        //     throw new BadRequestException("Invalid Credentials");
        // }

        const token = this.signToken({
            email: foundUser.email
        })
        return token;
    }

    async logout() {

    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    async comparePassword(args: { password: string, hash: string }) {
        return await bcrypt.compare(args.password, args.hash);
    }

    async signToken(args: { email: string }) {
        const payload = args;
        return this.Jwt.signAsync(payload, { secret: SECRET })
    }
}


