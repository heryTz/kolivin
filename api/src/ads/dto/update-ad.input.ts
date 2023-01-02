import { CreateAdInput } from './create-ad.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdInput extends PartialType(CreateAdInput) {
  @Field()
  id: string;
}
