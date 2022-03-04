
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
};
const CardsEnum = {
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'T',
    11: 'J',
    12: 'Q',
    13: 'K',
    14: 'A',
};
const ColorsEnum = {
    1: 'h',
    2: 's',
    3: 'd',
    4: 'c',
};
function translateToCards(ArrOfArr){
    let cards = [];
    for (let i = 0; i < ArrOfArr.length; i++){
        cards.push(CardsEnum[ArrOfArr[i][0]]+ColorsEnum[ArrOfArr[i][1]]);
    }
    console.log("Your cards are: "+cards)
};
function drawRandomCard(){
    let value = getRandomInt(2,15); //2, 15
    let color = getRandomInt(1,5); //1, 5
    let card = [value, color];
    return card;
};
function drawNumOfCards(numOfCards){
    let hand=[drawRandomCard()]; // it can't start as empty because it creates infinite loop.
    let i = 1;
    while(i<numOfCards){
        let card = drawRandomCard();
        //console.log(`Cards in hand: ${hand}`)
        //console.log(`NEW CARD: ${card}`)
        function isInHand(hand, card){
            for (let j = 0; j < i; j++){
                let A = hand[j].toString();
                let B = card.toString();
                if (A===B){
                    return true;
                }
            }
        }
        if (isInHand(hand, card)) {
            //console.log("duplicate")
        } else {
            hand.push(card);
            i++;}
        
    }
    //console.log(`Your cards code is: ${hand}.`);
    return hand;
};
module.exports = {CardsEnum, translateToCards, drawNumOfCards };