import { createReadStream } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { errors } from '../constants/errors';

const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    for await (const chunk of stream) {
      hash.update(chunk);
    }

    console.log(hash.digest('hex'));
  } catch {
    throw new Error(errors.hashCalculationFailed);
  }

};

await calculateHash();
