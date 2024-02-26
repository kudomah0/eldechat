const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "ਹੈਲੋ ਸੰਸਾਰ", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
