import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { File } from 'src/file/entities/file.entity';
import { Property } from 'src/property/entities/property.entity';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Room {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  surface: number;

  @Field(() => Property)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Property.name })
  property: Property;

  @Field(() => [File])
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: File.name }] })
  pictures: File[];
}

export type RoomDocument = HydratedDocument<Room>;

export const RoomSchema = SchemaFactory.createForClass(Room);
