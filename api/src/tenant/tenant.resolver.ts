import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TenantService } from './tenant.service';
import { CreateTenantInput } from './dto/create-tenant.input';

@Resolver('Tenant')
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}

  @Mutation('createTenant')
  create(@Args('createTenantInput') createTenantInput: CreateTenantInput) {
    return this.tenantService.create(createTenantInput);
  }

  @Query('tenant')
  findOne(@Args('id') id: string) {
    return this.tenantService.findOne(id as any);
  }

  @Query('tenantFindByEmail')
  findByEmail(@Args('email') email: string) {
    return this.tenantService.findByEmail(email);
  }
}
