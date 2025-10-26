import { createReadStream } from 'node:fs';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const stream = createReadStream(filePath);

    for await (const chunk of stream) {
      process.stdout.write(chunk);

    }

    process.stdout.write('\n');
  } catch {
    throw new Error(errors.fileReadFailed);
  }
};

await read();
