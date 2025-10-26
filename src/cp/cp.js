import path from 'node:path';
import { fork } from 'node:child_process';
import { errors } from '../constants/errors.js';

const __dirname = import.meta.dirname;
const scriptPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  try {
    fork(scriptPath, args);
  } catch {
    throw new Error(errors.spawnChildProcessFailed);
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['awesomeArgument1', 'HLEB', 'HELB']);
