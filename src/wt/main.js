import { Worker } from 'node:worker_threads';
import path from 'node:path';
import os from 'node:os';

const __dirname = import.meta.dirname;
const workerPath = path.join(__dirname, 'worker.js');
const cpusLength = os.cpus().length;
const start = 10;

const performCalculations = async () => {

  const workers = [];

  for (let i = 0; i < cpusLength; i++) {
    const worker = new Worker(workerPath, {
      workerData: start + i,
    });

    const resultPromise = new Promise((resolve) => {
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
      worker.on('exit', (code) => {
        if (code !== 0) resolve({ status: 'error', data: null });
      });
    });

    workers.push(resultPromise);
  }

  const results = await Promise.all(workers);
  console.log(results);
};

await performCalculations();
