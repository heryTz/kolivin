import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { File } from 'src/file/entities/file.entity';
import { Room } from 'src/room/entities/room.entity';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
@Schema()
export class Property {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  address: string;

  @Field()
  @Prop({ required: true })
  surface: number;

  @Field(() => [Room])
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }] })
  rooms: Room[];

  @Field(() => [File])
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: File.name }] })
  pictures: File[];
}

export type PropertyDocument = HydratedDocument<Property>;

export const PropertySchema = SchemaFactory.createForClass(Property);
