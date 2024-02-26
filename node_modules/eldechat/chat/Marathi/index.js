const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "हॅलो वर्ल्ड्स", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
