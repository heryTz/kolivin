import { IsNotEmpty } from 'class-validator';

export class CreateFileInput {
  @IsNotEmpty()
  data: string;
}
