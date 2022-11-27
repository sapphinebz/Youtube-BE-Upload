import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import * as path from 'path';
import * as multer from 'multer';

// for detail
// https://github.com/expressjs/multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(process.cwd(), 'files'));
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

@Module({
  imports: [MulterModule.register({ storage: storage })],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
