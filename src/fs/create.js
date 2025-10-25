import fs from 'node:fs/promises';
import path from 'node:path';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    const fd = await fs.open(filePath, 'wx');
    await fd.writeFile('I am fresh and young');
    await fd.close();
  } catch {
    throw new Error(errors.fsOperationFailed);
  }
};

await create();
