import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './upload.controller';
import * as path from 'path';
import * as multer from 'multer';

import * as fs from 'fs';
// for detail
// https://github.com/expressjs/multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const directoryPath = path.join(process.cwd(), 'files');
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath);
    }

    callback(null, directoryPath);
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

@Module({
  imports: [MulterModule.register({ storage: storage })],
  controllers: [UploadController],
  providers: [],
})
export class UploadModule {}
