import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor() {}

  @Post('/multiples')
  @UseInterceptors(FilesInterceptor('files'))
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    const details = files.map((file) => ({
      filename: file.filename,
      size: file.size,
    }));
    return {
      result: details,
    };
  }
}
