const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "ciao mondi", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
