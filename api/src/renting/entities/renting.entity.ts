import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Ad } from 'src/ads/entities/ad.entity';
import { Tenant } from 'src/tenant/entities/tenant.entity';
import { RentingStatus } from '../renting.type';

@Schema()
export class Renting {
  @Prop({ type: String })
  status: RentingStatus;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ad' })
  ad: Ad;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' })
  tenant: Tenant;
}

export type RentingDocument = HydratedDocument<Renting>;

export const RentingSchema = SchemaFactory.createForClass(Renting);
