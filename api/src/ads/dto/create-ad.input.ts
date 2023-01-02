import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreatePropertyInput } from 'src/property/dto/create-property.input';

@InputType()
export class CreateAdInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNumber()
  rentalUnit: number;

  @Field(() => CreatePropertyInput)
  @ValidateNested()
  property: CreatePropertyInput;
}
