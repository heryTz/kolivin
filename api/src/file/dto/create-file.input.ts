import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateFileInput {
  @Field()
  @IsNotEmpty()
  data: string;
}
