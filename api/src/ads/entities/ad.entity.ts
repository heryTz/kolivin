import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, now } from 'mongoose';
import { Property } from 'src/graphql';
import { Renting } from 'src/renting/entities/renting.entity';

@Schema()
export class Ad {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  rentalUnit: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Property.name })
  property: Property;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Renting.name }] })
  rentings: Renting[];

  @Prop({ default: now() })
  createdAt: Date;
}

export type AdDocument = HydratedDocument<Ad>;

export const AdSchema = SchemaFactory.createForClass(Ad);
