import { IsNotEmpty } from 'class-validator';
import { RentingStatus } from '../renting.type';

export class CreateRentingInput {
  @IsNotEmpty()
  status: RentingStatus;

  @IsNotEmpty()
  tenant: string;

  @IsNotEmpty()
  ad: string;
}
