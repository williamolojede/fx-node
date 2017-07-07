const https = require('https');

// calculator
function fxCalc(amount, rate){
  const calc = parseFloat(amount) * parseFloat(rate);
  return calc.toFixed(2);
}

// printer
function fxPrinter({ amount, base, target, result }){
  console.log(`${amount} ${base} is ${result} ${target}`);
}

function fx ({base, amount, target}) {
  const url = `https://api.fixer.io/latest?base=${base}`;
  https.get(url, res => {
    let body = "";

    // store response
    res.on('data', chunck => body += chunck);

    // parse data and and it over to the calc the print the result out
    res.on('end', () => {
      const rate = JSON.parse(body).rates[target.toUpperCase()];
      const result  = fxCalc(amount, rate);
      fxPrinter({ amount, base, target, result })
    });
  });
}

// export fx module
module.exports.fx = fx;
