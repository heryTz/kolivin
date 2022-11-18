import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRoomInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsArray()
  pictures: string[];

  @IsNumber()
  surface: number;

  @IsNotEmpty()
  property: string;
}
