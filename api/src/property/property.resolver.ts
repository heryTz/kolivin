import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PropertyService } from './property.service';
import { CreatePropertyInput } from './dto/create-property.input';
import { UpdatePropertyInput } from './dto/update-property.input';
import { Property } from './entities/property.entity';

@Resolver(() => Property)
export class PropertyResolver {
  constructor(private readonly propertyService: PropertyService) {}

  @Mutation(() => Property, { name: 'createProperty' })
  create(@Args('createProperty') createPropertyInput: CreatePropertyInput) {
    return this.propertyService.create(createPropertyInput);
  }

  @Query(() => [Property], { name: 'properties' })
  findAll() {
    return this.propertyService.findAll();
  }

  @Query(() => Property, { name: 'property' })
  findOne(@Args('id') id: string) {
    return this.propertyService.findOne(id as any);
  }

  @Mutation(() => Property, { name: 'updateProperty' })
  update(@Args('updateProperty') updatePropertyInput: UpdatePropertyInput) {
    return this.propertyService.update(
      updatePropertyInput.id as any,
      updatePropertyInput,
    );
  }

  @Mutation(() => Property, { name: 'removeProperty' })
  remove(@Args('id') id: string) {
    return this.propertyService.remove(id as any);
  }
}
