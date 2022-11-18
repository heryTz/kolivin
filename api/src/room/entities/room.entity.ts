import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { File } from 'src/file/entities/file.entity';
import { Property } from 'src/property/entities/property.entity';

@Schema()
export class Room {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  surface: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Property.name })
  property: Property;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: File.name }] })
  pictures: File[];
}

export type RoomDocument = HydratedDocument<Room>;

export const RoomSchema = SchemaFactory.createForClass(Room);
