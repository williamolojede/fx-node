const https = require('https');

// calculator
function fxCalc(amount, rate){
  return amount * rate;
}

// printer
function fxPrinter(data){
  const {amount, base, target, result} = data;
  return `${amount} ${base} is ${result} ${target}`;
}

function fx ({base, amount, target}) {
  const url = `https://api.fixer.io/latest?base=${base}`;
  https.get(url, res => {
    let body = "";

    // store response
    res.on('data', chunck => body += chunck);

    // parse data and and it over to the calc the print the result out
    res.on('end', () => {
      console.log(JSON.parse(body));
    });
  });
}

// export fx module
module.exports.fx = fx;
