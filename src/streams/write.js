import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  try {
    const stream = createWriteStream(filePath);
    console.log('Enter some text. Press Ctrl+C to quit:\n');
    process.stdin.pipe(stream);
  } catch {
    throw new Error(errors.fileWriteFailed);
  }
};

await write();