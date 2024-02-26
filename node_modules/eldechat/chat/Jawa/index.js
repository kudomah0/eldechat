const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "hello donya", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
