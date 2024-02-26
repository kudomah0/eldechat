const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "Hallo Welten", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
