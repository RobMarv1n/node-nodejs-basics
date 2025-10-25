const parseArgs = () => {
  const args = process.argv.slice(2);
  for (const arg of args) {
    if (arg.startsWith('--')) {
      console.log(`${arg} is ${args[args.indexOf(arg) + 1]}`);
    }
  }
};

parseArgs();
