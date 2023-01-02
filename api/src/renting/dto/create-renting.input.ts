import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { RentingStatus } from '../renting.type';

@InputType()
export class CreateRentingInput {
  @Field(() => String)
  @IsNotEmpty()
  status: RentingStatus;

  @Field()
  @IsNotEmpty()
  tenant: string;

  @Field()
  @IsNotEmpty()
  ad: string;
}
