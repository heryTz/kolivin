import { OmitType } from '@nestjs/mapped-types';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreateRoomInput } from 'src/room/dto/create-room.input';

export class CreatePropertyInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  address: string;

  @IsArray()
  pictures: string[];

  @IsNumber()
  surface: number;

  @ValidateNested()
  rooms: CreateInputRoomPartial[];
}

class CreateInputRoomPartial extends OmitType(CreateRoomInput, ['property']) {}
