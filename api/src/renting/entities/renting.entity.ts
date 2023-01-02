import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Ad } from 'src/ads/entities/ad.entity';
import { Tenant } from 'src/tenant/entities/tenant.entity';
import { RentingStatus } from '../renting.type';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Renting {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ type: String })
  status: RentingStatus;

  @Field(() => Ad)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Ad' })
  ad: Ad;

  @Field(() => Tenant)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' })
  tenant: Tenant;
}

export type RentingDocument = HydratedDocument<Renting>;

export const RentingSchema = SchemaFactory.createForClass(Renting);
