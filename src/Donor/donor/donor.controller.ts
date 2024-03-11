/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DonorService } from './donor.service';
import { createDonorDto } from '../dtos/CreateDonor.Dto';

@Controller('donor')
export class DonorController {
    constructor(private donorService: DonorService) {

    }

    @Post()
    @UsePipes(ValidationPipe)
    postDonor(@Body() createDonorDto: createDonorDto) {
        return this.donorService.createDonor(createDonorDto)
    }

    @Get()
    getDonor() {
        return this.donorService.getDonor();
    }
}
