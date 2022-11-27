import {
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor() {}
  @Post('/single')
  @UseInterceptors(FileInterceptor('file'))
  uploadSingleFile() {}

  @Post('/multiples')
  @UseInterceptors(FilesInterceptor('files'))
  uploadMultipleFiles() {}
}
