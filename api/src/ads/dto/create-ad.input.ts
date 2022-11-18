import { IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreatePropertyInput } from 'src/property/dto/create-property.input';

export class CreateAdInput {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  rentalUnit: number;

  @ValidateNested()
  property: CreatePropertyInput;
}
