import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Tenant {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;
}

export type TenantDocument = HydratedDocument<Tenant>;

export const TenantSchema = SchemaFactory.createForClass(Tenant);
