import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor() {}

  @Post('/multiples')
  @UseInterceptors(FilesInterceptor('files'))
  uploadMultipleFiles() {
    return {
      result: true,
    };
  }
}
