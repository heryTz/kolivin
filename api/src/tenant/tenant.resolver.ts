import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TenantService } from './tenant.service';
import { CreateTenantInput } from './dto/create-tenant.input';
import { Tenant } from './entities/tenant.entity';

@Resolver(() => Tenant)
export class TenantResolver {
  constructor(private readonly tenantService: TenantService) {}

  @Mutation(() => Tenant, { name: 'createTenant' })
  create(@Args('createTenant') createTenantInput: CreateTenantInput) {
    return this.tenantService.create(createTenantInput);
  }

  @Query(() => Tenant, { name: 'tenant' })
  findOne(@Args('id') id: string) {
    return this.tenantService.findOne(id as any);
  }

  @Query(() => Tenant, { name: 'tenantByEmail' })
  findByEmail(@Args('email') email: string) {
    return this.tenantService.findByEmail(email);
  }
}
