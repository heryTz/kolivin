import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Property } from 'src/property/entities/property.entity';
import { Renting } from 'src/renting/entities/renting.entity';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Ad {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({ required: true })
  rentalUnit: number;

  @Field(() => Property)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Property.name })
  property: Property;

  @Field(() => [Renting])
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Renting.name }] })
  rentings: Renting[];

  @Field(() => Date)
  @Prop()
  createdAt: Date;

  @Field(() => Date)
  @Prop()
  updatedAt: Date;
}

export type AdDocument = HydratedDocument<Ad>;

export const AdSchema = SchemaFactory.createForClass(Ad);
