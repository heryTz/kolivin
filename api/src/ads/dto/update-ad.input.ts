import { CreateAdInput } from './create-ad.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAdInput extends PartialType(CreateAdInput) {
  id: number;
}
