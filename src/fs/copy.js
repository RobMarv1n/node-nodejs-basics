import fs from 'node:fs/promises';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const srcDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.cp(srcDir, destDir, { errorOnExist: true, force: false, recursive: true });
  } catch {
    throw new Error(errors.fsOperationFailed);
  }
};

await copy();
