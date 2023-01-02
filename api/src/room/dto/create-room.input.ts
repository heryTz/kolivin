import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateRoomInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field(() => [String])
  @IsNotEmpty()
  @IsArray()
  pictures: string[];

  @Field()
  @IsNumber()
  surface: number;

  @Field()
  @IsNotEmpty()
  property: string;
}
