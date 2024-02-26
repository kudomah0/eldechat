const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "bonjour tout le monde", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
