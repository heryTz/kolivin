import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Ad, AdDocument } from 'src/ads/entities/ad.entity';
import { CreateRentingInput } from './dto/create-renting.input';
import { Renting, RentingDocument } from './entities/renting.entity';

@Injectable()
export class RentingService {
  constructor(
    @InjectModel(Renting.name) private retingModel: Model<RentingDocument>,
    @InjectModel(Ad.name) private adModel: Model<AdDocument>,
  ) {}

  async create(createRentingInput: CreateRentingInput) {
    const newRenting = await (
      await this.retingModel.create(createRentingInput)
    ).save();
    await this.adModel.updateOne(
      { _id: createRentingInput.ad },
      { $push: { rentings: newRenting } },
    );
    return this.findOne(newRenting._id as any);
  }

  findOne(id: ObjectId) {
    return this.retingModel
      .findOne({ _id: id })
      .populate('tenant')
      .populate({
        path: 'ad',
        populate: {
          path: 'property',
          populate: [
            { path: 'pictures' },
            { path: 'rooms', populate: { path: 'pictures' } },
          ],
        },
      });
  }

  findAll() {
    return this.retingModel
      .find()
      .populate('tenant')
      .populate({
        path: 'ad',
        populate: {
          path: 'property',
          populate: [
            { path: 'pictures' },
            { path: 'rooms', populate: { path: 'pictures' } },
          ],
        },
      });
  }
}
