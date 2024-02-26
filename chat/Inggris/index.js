const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "Hellow Worlds", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
