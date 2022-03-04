const Dealer = require("./Dealer.js");
const Strength = require("./Strength.js");

for (let i = 0; i < 15; i++) {
  let myhand = Dealer.drawNumOfCards(5);
  Dealer.translateToCards(myhand);
  Strength.checkHand(myhand);
}

// const myhand = [[6,1],[6,2],[6,3], [7,3], [6,4]];  //quad
// const myhand = [[6,1],[6,2],[6,3], [7,3], [7,4]];  //boat
// const myhand = [[12,1],[10,2],[11,3], [14,3], [13,4]];  //str8
// const myhand = [[12,4],[10,4],[11,4], [9,4], [13,4]];  //str8 flush
// const myhand = [[12,4],[10,4],[11,4], [14,4], [13,4]];  //Royal flush
// const myhand = [[10,4],[10,3],[5,4], [4,4], [10,1]];  //set

// Dealer.translateToCards(myhand);
// Strength.checkHand(myhand);
