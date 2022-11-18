import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { FileService } from './file.service';
import { CreateFileInput } from './dto/create-file.input';

@Resolver('File')
export class FileResolver {
  constructor(private readonly fileService: FileService) {}

  @Mutation('uploadFile')
  uploadFile(@Args('createFileInput') createFileInput: CreateFileInput) {
    return this.fileService.create(createFileInput);
  }

  @Mutation('deleteFile')
  deleteFile(@Args('id') id: string) {
    return this.fileService.remove(id as any);
  }
}
