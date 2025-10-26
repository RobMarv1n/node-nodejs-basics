import fs from 'node:fs/promises';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const dirPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    const files = await fs.readdir(dirPath);
    console.log(files);
  }
  catch {
    throw new Error(errors.fsOperationFailed);
  }
};

await list();
