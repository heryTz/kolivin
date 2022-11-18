import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { File } from 'src/file/entities/file.entity';
import { Room } from 'src/room/entities/room.entity';

@Schema()
export class Property {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  surface: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }] })
  rooms: Room[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: File.name }] })
  pictures: File[];
}

export type PropertyDocument = HydratedDocument<Property>;

export const PropertySchema = SchemaFactory.createForClass(Property);
