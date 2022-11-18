import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileDocument } from 'src/file/entities/file.entity';
import { FileService } from 'src/file/file.service';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';
import { Room, RoomDocument } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name) private roomModel: Model<RoomDocument>,
    private fileService: FileService,
  ) {}

  async create(createRoomInput: CreateRoomInput) {
    const newRoom = await this.roomModel.create(createRoomInput);
    return newRoom.save();
  }

  findAll() {
    return this.roomModel.find().populate('pictures');
  }

  findOne(id: ObjectId) {
    return this.roomModel.findById(id).populate('pictures');
  }

  async update(id: ObjectId, updateRoomInput: UpdateRoomInput) {
    await this.roomModel.updateOne({ _id: id }, updateRoomInput);
    return this.findOne(id);
  }

  async remove(id: ObjectId) {
    const room = await this.findOne(id);
    await Promise.all(
      room.pictures.map((el: FileDocument) =>
        this.fileService.remove(el._id as any),
      ),
    );
    await this.roomModel.deleteOne({ _id: id });
    return room;
  }
}
