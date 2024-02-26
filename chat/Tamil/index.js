const cowsay = require('cowsay');

function haloDuniaArmadillo() {
  console.log(cowsay.say({ text: "வணக்கம் உலகங்கள்", f: "armadillo" }));
}

module.exports = haloDuniaArmadillo;
