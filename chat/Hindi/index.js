const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "नमस्ते संसार", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
