const chalk = require('chalk');
const fx = require('./fx');

// check if user passed the required arguements
if (process.argv.length === 2) {
  console.log(chalk.red('Required arguements missing, please check the README!!!'));
  return 0;
}

const input = process.argv.slice(2);

const [ amount, base, _, target ] = input;
const query = {
  amount,
  base,
  target 
}

fx.fx(query);
