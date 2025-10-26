import { errors } from '../constants/errors.js';
import { Transform } from 'node:stream';

const transform = async () => {
  try {
    const stream = new Transform({
      transform(chunk, encoding, callback) {
        const reversed = chunk.toString().split('').reverse().join('');
        callback(null, reversed);
      }
    });

    console.log('Enter some text. Press Ctrl+C to quit:\n');
    process.stdin.pipe(stream).pipe(process.stdout);
  } catch {
    throw new Error(errors.transformFailed);
  }
};

await transform();
