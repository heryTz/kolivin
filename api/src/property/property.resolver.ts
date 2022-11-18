import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PropertyService } from './property.service';
import { CreatePropertyInput } from './dto/create-property.input';
import { UpdatePropertyInput } from './dto/update-property.input';

@Resolver('Property')
export class PropertyResolver {
  constructor(private readonly propertyService: PropertyService) {}

  @Mutation('createProperty')
  create(
    @Args('createPropertyInput') createPropertyInput: CreatePropertyInput,
  ) {
    return this.propertyService.create(createPropertyInput);
  }

  @Query('properties')
  findAll() {
    return this.propertyService.findAll();
  }

  @Query('property')
  findOne(@Args('id') id: string) {
    return this.propertyService.findOne(id as any);
  }

  @Mutation('updateProperty')
  update(
    @Args('updatePropertyInput') updatePropertyInput: UpdatePropertyInput,
  ) {
    return this.propertyService.update(
      updatePropertyInput.id as any,
      updatePropertyInput,
    );
  }

  @Mutation('removeProperty')
  remove(@Args('id') id: string) {
    return this.propertyService.remove(id as any);
  }
}
