const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "hallo wêrelde", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
