import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
