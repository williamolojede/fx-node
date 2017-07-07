const fx = require('./fx');

const input = process.argv.slice(2);

// get the amount by filtering for the item that is a number
// const amount = parseInt(query.filter(q => !isNaN(q))[0], 10);
const [ amount, base, _, target ] = input;
const query = {
  amount,
  base,
  target 
}

fx.fx(query);
// TODO
// get amount from user
// get base currency 
// get target currency
// fetch exchage rate froom api
// calculate the target amount
// print the target amount to user
