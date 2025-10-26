const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];

  for (let i = 0; i < args.length; i += 1) {
    if (args[i].startsWith('--')) {
      result.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }
  }

  console.log(result.join(', '));
};

parseArgs();
