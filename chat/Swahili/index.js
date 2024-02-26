const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "habari walimwengu", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
