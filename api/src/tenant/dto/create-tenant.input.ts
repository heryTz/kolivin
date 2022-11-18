import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTenantInput {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;
}
