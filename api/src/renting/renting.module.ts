import { Module } from '@nestjs/common';
import { RentingService } from './renting.service';
import { RentingResolver } from './renting.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Renting, RentingSchema } from './entities/renting.entity';
import { Ad, AdSchema } from 'src/ads/entities/ad.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Renting.name, schema: RentingSchema },
      { name: Ad.name, schema: AdSchema },
    ]),
  ],
  providers: [RentingResolver, RentingService],
  exports: [],
})
export class RentingModule {}
