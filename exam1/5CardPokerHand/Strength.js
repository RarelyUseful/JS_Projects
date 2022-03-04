const Dealer = require('./Dealer.js');

const HandsEnum = {
    1: 'high-card',
    2: 'one-pair',
    3: 'two-pairs',
    4: 'set',
    5: 'str8',
    6: 'flush',
    7: 'full-house',
    8: 'quads',
    9: 'str8-flush',
    10: 'royal-flush',
}
let valueMap = new Map();
let colorMap = new Map();

function handToMaps(hand){
    valueMap = new Map();
    colorMap = new Map();
    hand.forEach(element => {
        if (valueMap.has(element[0])){
            valueMap.set(element[0], (valueMap.get(element[0])+1));
        }else{
            valueMap.set(element[0], 1);
        }
        if (colorMap.has(element[1])){
            colorMap.set(element[1], (colorMap.get(element[1])+1));
        }else{
            colorMap.set(element[1], 1);
        }
    });
}
const hasInMap = (map, val) => {
    for (let v of map.values()) {
      if (v === val) { 
        return true; 
      }
    }  
    return false;
}
function isFlush() {
    if (colorMap.size === 1){
        return true;
    }
}
function isQuad() {
    if (valueMap.size === 2 && (hasInMap(valueMap, 4) && hasInMap(valueMap, 1))){
        return true;
    }
}
function isBoat(){
    if (valueMap.size === 2 && (hasInMap(valueMap, 3) && hasInMap(valueMap, 2))){
        return true;
    }
}
function isSet(){
    if (valueMap.size === 3 && (hasInMap(valueMap, 3) && hasInMap(valueMap, 1))){
        return true;
    }
}
function isTwoPair(){
    if (valueMap.size === 3 && (hasInMap(valueMap, 2) && hasInMap(valueMap, 1))){
        return true;
    }
}
function isOnePair(){
    if (valueMap.size === 4  && hasInMap(valueMap, 2)){
        return true;
    }
}
function isStr8(){
    let max = Math.max(...valueMap.keys());
    let min = Math.min(...valueMap.keys());
    if (valueMap.size === 5 && (max - min == 4)){
        return true;
    }
}
function isStr8Flush(){
    if (isFlush() && isStr8() && !valueMap.has(14)){
        return true;
    }
}
function isRoyal(){
    if (isFlush() && isStr8() && valueMap.has(14)){
    return true;
    }
}
function isHighCard(){
    if (valueMap.size===5){
        return true;
    }
}

function checkHand(hand){
    handToMaps(hand);
    if (isRoyal()){
        console.log(HandsEnum[10]);
    }
    else if (isStr8Flush()){
        console.log(HandsEnum[9] +" "+Dealer.CardsEnum[Math.max(...valueMap.keys())]+"-high");
    }
    else if (isQuad()){
        console.log(HandsEnum[8]);
    }
    else if (isBoat()){
        console.log(HandsEnum[7]);
    }
    else if (isFlush()){
        console.log(HandsEnum[6] +" "+Dealer.CardsEnum[Math.max(...valueMap.keys())]+"-high");
    }
    else if (isStr8()){
        console.log(HandsEnum[5] +" "+Dealer.CardsEnum[Math.max(...valueMap.keys())]+"-high");
    }
    else if (isSet()){
        console.log(HandsEnum[4]);
    }
    else if (isTwoPair()){
        console.log(HandsEnum[3]);
    }
    else if (isOnePair()){
        console.log(HandsEnum[2]);
    }
    else if (isHighCard()){
        console.log(HandsEnum[1] +" "+Dealer.CardsEnum[Math.max(...valueMap.keys())]+"-high");
    }
    else console.log('error in strengh checking');
         
}
module.exports = {checkHand }