import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';

const __dirname = import.meta.dirname;
const archivePath = path.join(__dirname, 'files', 'archive.gz');
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const compress = async () => {
  try {
    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(archivePath);
    await pipeline(source, gzip, destination);
  } catch (error) {
    console.error(error);
  }
};

await compress();
