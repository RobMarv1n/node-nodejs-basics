import fs from 'node:fs/promises';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.rename(oldPath, newPath);
  } catch {
    throw new Error(errors.fsOperationFailed);
  }
};

await rename();
