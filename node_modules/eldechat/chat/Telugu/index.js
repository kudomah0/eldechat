const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "హలో వరల్డ్స్", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
