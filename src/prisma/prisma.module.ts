/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [PrismaModule],
    providers: [PrismaService],
    exports: [PrismaService]
})

export class PrismaModule { }