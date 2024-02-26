const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "مرحبا العوالم", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
