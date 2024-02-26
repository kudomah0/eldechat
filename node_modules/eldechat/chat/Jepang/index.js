const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "こんにちは、世界", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
