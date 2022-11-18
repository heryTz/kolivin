import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RentingService } from './renting.service';
import { CreateRentingInput } from './dto/create-renting.input';

@Resolver('Renting')
export class RentingResolver {
  constructor(private readonly rentingService: RentingService) {}

  @Mutation('createRenting')
  create(@Args('createRentingInput') createRentingInput: CreateRentingInput) {
    return this.rentingService.create(createRentingInput);
  }

  @Query('rentings')
  findAll() {
    return this.rentingService.findAll();
  }

  @Query('renting')
  findOne(@Args('id') id: string) {
    return this.rentingService.findOne(id as any);
  }
}
