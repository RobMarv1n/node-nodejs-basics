import fs from 'node:fs/promises';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  let fileHandle;
  try {
    fileHandle = await fs.open(filePath, 'wx');
    await fileHandle.writeFile('I am fresh and young');
  } catch {
    throw new Error(errors.fsOperationFailed);
  } finally {
    await fileHandle?.close();
  }
};

await create();
