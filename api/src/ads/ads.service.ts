import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { PropertyService } from 'src/property/property.service';
import { CreateAdInput } from './dto/create-ad.input';
import { FetchAdInput } from './dto/fetch-ad.input';
import { PaginatedAd } from './dto/paginated-ad';
import { UpdateAdInput } from './dto/update-ad.input';
import { Ad, AdDocument } from './entities/ad.entity';

@Injectable()
export class AdsService {
  constructor(
    @InjectModel(Ad.name) private adModel: Model<AdDocument>,
    private propertyService: PropertyService,
  ) {}

  async create({ property, ...data }: CreateAdInput) {
    const newAd = await (await this.adModel.create(data)).save();
    newAd.property = await this.propertyService.create(property);
    await newAd.save();
    return this.findOne(newAd._id as any);
  }

  async findAll(fetchAdInput: FetchAdInput): Promise<PaginatedAd> {
    const sort = fetchAdInput.sort ?? 'createdAt:DESC';
    const [sortField, sortOrder] = sort.split(':');
    const total = await this.adModel.count();
    const data = await this.adModel
      .find()
      .skip(fetchAdInput.offset)
      .limit(fetchAdInput.limit)
      .sort({ [sortField]: sortOrder === 'DESC' ? -1 : 1 })
      .populate({
        path: 'retings',
        strictPopulate: false,
        populate: { path: 'tenant' },
      })
      .populate({
        path: 'property',
        populate: [
          {
            path: 'rooms',
            populate: {
              path: 'pictures',
            },
          },
          { path: 'pictures' },
        ],
      });
    return { data, total };
  }

  findOne(id: ObjectId) {
    return this.adModel
      .findOne({ _id: id })
      .populate({
        path: 'retings',
        strictPopulate: false,
        populate: { path: 'tenant' },
      })
      .populate({
        path: 'property',
        populate: [
          {
            path: 'rooms',
            populate: {
              path: 'pictures',
            },
          },
          { path: 'pictures' },
        ],
      });
  }

  async update(id: ObjectId, updateAdInput: UpdateAdInput) {
    await this.adModel.updateOne({ _id: id }, updateAdInput);
    return this.findOne(id);
  }

  async remove(id: ObjectId) {
    const ad = await this.findOne(id);
    await this.adModel.remove({ _id: id });
    return ad;
  }
}
