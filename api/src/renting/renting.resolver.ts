import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RentingService } from './renting.service';
import { CreateRentingInput } from './dto/create-renting.input';
import { Renting } from './entities/renting.entity';

@Resolver(() => Renting)
export class RentingResolver {
  constructor(private readonly rentingService: RentingService) {}

  @Mutation(() => Renting, { name: 'createRenting' })
  create(@Args('createRentingInput') createRentingInput: CreateRentingInput) {
    return this.rentingService.create(createRentingInput);
  }

  @Query(() => Renting, { name: 'rentings' })
  findAll() {
    return this.rentingService.findAll();
  }

  @Query(() => Renting, { name: 'renting' })
  findOne(@Args('id') id: string) {
    return this.rentingService.findOne(id as any);
  }
}
