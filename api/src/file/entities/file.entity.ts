import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class File {
  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  mimeType: string;
}

export type FileDocument = HydratedDocument<File>;

export const FileSchema = SchemaFactory.createForClass(File);
