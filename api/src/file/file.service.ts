import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { mkdirSync, unlink, writeFile } from 'fs';
import { Model, ObjectId } from 'mongoose';
import { CreateFileInput } from './dto/create-file.input';
import { File, FileDocument } from './entities/file.entity';
import { v4 } from 'uuid';
import * as mime from 'mime-types';

@Injectable()
export class FileService {
  constructor(
    private configService: ConfigService,
    @InjectModel(File.name) private fileModel: Model<FileDocument>,
  ) {}

  async create(createFileInput: CreateFileInput) {
    const mimeType = this.getBase64MimeType(createFileInput.data);
    const extension = mime.extension(mimeType);
    const filename = `${v4()}.${extension}`;
    const filenamePath = `${
      this.configService.get('app').uploadPath
    }/${filename}`;
    this.saveBase64(
      this.configService.get('app').uploadPath,
      filename,
      createFileInput.data,
    );
    const newFile = await this.fileModel.create({
      filename: filenamePath,
      mimeType,
    });
    return this.findOne(newFile._id as any);
  }

  findOne(id: ObjectId) {
    return this.fileModel.findOne({ _id: id });
  }

  async remove(id: ObjectId) {
    const file = await this.findOne(id);
    unlink(
      file.filename,
      (error) => error && console.log('Delete file error', error),
    );
    await this.fileModel.remove(file);
    return file;
  }

  getBase64MimeType(base64Data: string) {
    const [mimeType] = base64Data.split(';base64,');
    return mimeType.replace('data:', '');
  }

  async saveBase64(outputPath: string, filename: string, base64Data: string) {
    const data = base64Data.split(';base64,');
    mkdirSync(outputPath, { recursive: true });
    writeFile(
      `${outputPath}/${filename}`,
      data.length > 1 ? data[1] : data[0],
      'base64',
      (error) => error && console.log(`Upload file error: ${error}`),
    );
  }
}
