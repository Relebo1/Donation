/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonorService {
    constructor(private prisma: PrismaService) {

    }

    createDonor(data: Prisma.DonorCreateInput) {
        return this.prisma.donor.create({ data })
    }

    getDonor() {
        return this.prisma.donor.findMany();
    }
}
