import { CreateRoomInput } from './create-room.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateRoomInput extends PartialType(CreateRoomInput) {
  @Field()
  @IsNotEmpty()
  id: string;
}
