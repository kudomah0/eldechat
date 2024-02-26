const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "привет миры", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
