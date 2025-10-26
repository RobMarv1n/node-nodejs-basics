import fs from 'node:fs/promises';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const content = await fs.readFile(filePath);
    console.log(content.toString());
  }
  catch {
    throw new Error(errors.fsOperationFailed);
  }
};

await read();
