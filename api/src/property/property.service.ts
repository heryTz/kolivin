import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileDocument } from 'src/file/entities/file.entity';
import { FileService } from 'src/file/file.service';
import { RoomDocument } from 'src/room/entities/room.entity';
import { RoomService } from 'src/room/room.service';
import { CreatePropertyInput } from './dto/create-property.input';
import { UpdatePropertyInput } from './dto/update-property.input';
import { Property, PropertyDocument } from './entities/property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
    private roomService: RoomService,
    private fileService: FileService,
  ) {}

  async create({ rooms, ...data }: CreatePropertyInput) {
    let newProperty = await this.propertyModel.create(data);
    newProperty = await newProperty.save();
    const newRooms = await Promise.all(
      rooms.map((el) =>
        this.roomService.create({
          ...el,
          property: newProperty._id as any,
        }),
      ),
    );
    newProperty.rooms = newRooms;
    await newProperty.save();
    return this.propertyModel
      .findById(newProperty.id)
      .populate('pictures')
      .populate({
        path: 'rooms',
        populate: {
          path: 'pictures',
        },
      });
  }

  findAll() {
    return this.propertyModel
      .find()
      .populate('pictures')
      .populate({
        path: 'rooms',
        populate: {
          path: 'pictures',
        },
      });
  }

  findOne(id: ObjectId) {
    return this.propertyModel
      .findById(id)
      .populate('pictures')
      .populate({
        path: 'rooms',
        populate: {
          path: 'pictures',
        },
      });
  }

  async update(id: ObjectId, updatePropertyInput: UpdatePropertyInput) {
    await this.propertyModel.updateOne({ _id: id }, updatePropertyInput);
    return this.findOne(id);
  }

  async remove(id: ObjectId) {
    const property = await this.findOne(id);
    await Promise.all(
      property.pictures.map((el: FileDocument) =>
        this.fileService.remove(el._id as any),
      ),
    );
    await Promise.all(
      property.rooms.map((el: RoomDocument) =>
        this.roomService.remove(el._id as any),
      ),
    );
    await this.propertyModel.deleteOne({ _id: id });
    return property;
  }
}
