const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "merhaba dünyalar", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
