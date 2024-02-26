const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "你好世界", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
