import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RoomService } from './room.service';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';
import { Room } from './entities/room.entity';

@Resolver(() => Room)
export class RoomResolver {
  constructor(private readonly roomService: RoomService) {}

  @Mutation(() => Room, { name: 'createRoom' })
  create(@Args('createRoom') createRoomInput: CreateRoomInput) {
    return this.roomService.create(createRoomInput);
  }

  @Query(() => [Room], { name: 'rooms' })
  findAll() {
    return this.roomService.findAll();
  }

  @Query(() => Room, { name: 'room' })
  findOne(@Args('id') id: number) {
    return this.roomService.findOne(id as any);
  }

  @Mutation(() => Room, { name: 'updateRoom' })
  update(@Args('updateRoom') updateRoomInput: UpdateRoomInput) {
    return this.roomService.update(updateRoomInput.id as any, updateRoomInput);
  }

  @Mutation(() => Room, { name: 'removeRoom' })
  remove(@Args('id') id: string) {
    return this.roomService.remove(id as any);
  }
}
