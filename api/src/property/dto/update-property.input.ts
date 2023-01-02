import { CreatePropertyInput } from './create-property.input';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePropertyInput extends PartialType(
  OmitType(CreatePropertyInput, ['rooms']),
) {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field(() => [String])
  @IsOptional()
  @IsArray()
  rooms?: string[];
}
