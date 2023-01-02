import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { FileService } from './file.service';
import { CreateFileInput } from './dto/create-file.input';
import { File } from './entities/file.entity';

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Mutation(() => File)
  uploadFile(@Args('uploadFile') createFileInput: CreateFileInput) {
    return this.fileService.create(createFileInput);
  }

  @Mutation(() => File)
  removeFile(@Args('id') id: string) {
    return this.fileService.remove(id as any);
  }
}
