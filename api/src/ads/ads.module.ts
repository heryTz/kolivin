import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsResolver } from './ads.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Ad } from 'src/graphql';
import { AdSchema } from './entities/ad.entity';
import { PropertyModule } from 'src/property/property.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ad.name, schema: AdSchema }]),
    PropertyModule,
  ],
  providers: [AdsResolver, AdsService],
  exports: [AdsService],
})
export class AdsModule {}
