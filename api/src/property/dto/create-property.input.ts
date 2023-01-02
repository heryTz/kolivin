import { Field, InputType, OmitType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreateRoomInput } from 'src/room/dto/create-room.input';

@InputType()
class CreateInputRoomPartial extends OmitType(CreateRoomInput, ['property']) {}

@InputType()
export class CreatePropertyInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  address: string;

  @Field(() => [String])
  @IsArray()
  pictures: string[];

  @Field()
  @IsNumber()
  surface: number;

  @Field(() => [CreateInputRoomPartial])
  @ValidateNested()
  rooms: CreateInputRoomPartial[];
}
