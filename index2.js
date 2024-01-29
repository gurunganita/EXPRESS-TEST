/*function generateRandom(maxLimit = 16) {
  /*let rand = Math.random() * maxLimit;
  console.log(rand);
  rand = Math.floor(rand);
  return rand;
};
generateRandom();
generateRandom(20);
*/
// const prompt = require("prompt-sync")();
// const sides = (prompt("enter roll dice num"));
const rollDice = (sides) => Math.floor(Math.random() * sides);
const res = rollDice(11);
console.log(res);
