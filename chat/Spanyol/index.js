const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "hola mundos", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
