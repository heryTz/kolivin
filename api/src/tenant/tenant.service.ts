import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateTenantInput } from './dto/create-tenant.input';
import { Tenant, TenantDocument } from './entities/tenant.entity';

@Injectable()
export class TenantService {
  constructor(
    @InjectModel(Tenant.name) private tenantModel: Model<TenantDocument>,
  ) {}

  async create(createTenantInput: CreateTenantInput) {
    const newTenant = await (
      await this.tenantModel.create(createTenantInput)
    ).save();
    return this.findOne(newTenant._id as any);
  }

  findOne(id: ObjectId) {
    return this.tenantModel.findOne({ _id: id });
  }

  findByEmail(email: string) {
    return this.tenantModel.findOne({ email });
  }
}
