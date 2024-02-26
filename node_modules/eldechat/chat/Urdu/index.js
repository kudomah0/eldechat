const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "ہیلو دنیاؤں", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
