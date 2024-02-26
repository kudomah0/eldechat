const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "olá mundos", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
