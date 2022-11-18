import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyResolver } from './property.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Property, PropertySchema } from './entities/property.entity';
import { RoomModule } from 'src/room/room.module';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [
    FileModule,
    RoomModule,
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
    ]),
  ],
  providers: [PropertyResolver, PropertyService],
  exports: [PropertyService],
})
export class PropertyModule {}
