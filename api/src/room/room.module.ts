import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomResolver } from './room.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './entities/room.entity';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [
    FileModule,
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
  ],
  providers: [RoomResolver, RoomService],
  exports: [RoomService],
})
export class RoomModule {}
