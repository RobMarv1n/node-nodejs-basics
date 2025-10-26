import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';

const __dirname = import.meta.dirname;
const archivePath = path.join(__dirname, 'files', 'archive.gz');
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  try {
    const gzip = createGunzip();
    const source = createReadStream(archivePath);
    const destination = createWriteStream(filePath);
    await pipeline(source, gzip, destination);
  } catch (error) {
    console.error(error);
  }
};

await decompress();
