import { CreatePropertyInput } from './create-property.input';
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePropertyInput extends PartialType(
  OmitType(CreatePropertyInput, ['rooms']),
) {
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsArray()
  rooms?: string[];
}
