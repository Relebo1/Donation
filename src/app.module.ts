/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';

import { DonorModule } from './Donor/donor/donor.module';
import { AuthModule } from './auth/auth.module';
@Global()
@Module({
  imports: [DonorModule, AuthModule],
})
export class AppModule {}
