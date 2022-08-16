/* Create memory game where computer plays with itself. 
The number of players random 2-4. Each player takes turn in revealing board elements. Trying to find a pair. Typical memory game.  
Lets make an assumption that players have perfect memory but they only remember elements revealed by themself. */

/***
 * Code is not done.
 * When player draws card, and hits matching card on second draw code doesn't act accordingly.
 * guess() function needs to be broken into two, drawfirst() and drawsecond()
 */

const brd = [
  [2, 4, 6, 8],
  [2, 4, 6, 8],
  [1, 3, 5, 7],
  [1, 3, 5, 7],
];
class Board {
  constructor(gameboard, gameover = false) {
    this.gameboard = gameboard;
    this.gameover = gameover;

    this.slots = [];
    this.slotsNumber = 0;

    for (let i = 0; i < this.gameboard.length; i++) {
      for (let j = 0; j < this.gameboard[i].length; j++) {
        const data = i + ":" + j;
        this.slots.push(data);
        this.slotsNumber++;
      } // this creates array like ["0:0", "0:1", 0:2"...]
    }
    // gameboard.forEach((element) => {
    //   this.slots++;
    // });

    // this.bX = gameboard.length - 1;
    // this.bY = gameboard[0].length - 1;
  }
}
class Player {
  constructor(
    gameboard,
    name,
    unchecked = gameboard.slots.slice(),
    slotsNumber = gameboard.slotsNumber,
    memory = new Map(),
    hasMatchStored = false,
    matchedCard = 0,
    matchedXY = [null, null]
  ) {
    this.gameboard = gameboard;
    this.name = name;
    this.memory = memory;
    this.unchecked = unchecked;
    this.slotsNumber = slotsNumber;
    this.hasMatchStored = hasMatchStored;
    this.matchedCard = matchedCard;
    this.matchedXY = matchedXY;
  }

  randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  guess(available) {
    //select random field
    let availableGuesses = available;
    if (this.hasMatchStored && availableGuesses === 2) {
      let xyMemory = this.memory.get(this.matchedCard);
      let xyMatched = this.matchedXY;
      let x1 = xyMemory[0],
        y1 = xyMemory[1],
        x2 = xyMatched[0],
        y2 = xyMatched[1];
      console.log(this.name, "has 2 cards matched in memory");
      if (
        typeof this.gameboard.gameboard[x1][y1] === "number" &&
        typeof this.gameboard.gameboard[x2][y2] === "number"
      ) {
        this.gameboard.gameboard[x1][y1] = "x";
        this.gameboard.gameboard[x2][y2] = "x";
        this.availableGuesses -= 2;
        this.hasMatchStored = false;
        return;
      } else {
        console.log("looks like somoene else took it");
      }
    }
    let randomNumber = this.randomInt(0, this.unchecked.length - 1);
    let selectedSpot = this.unchecked[randomNumber]; //this return string like "0:2"
    let arrXY = selectedSpot.split(":");
    let x = arrXY[0];
    let y = arrXY[1];

    //check if field is still available
    if (
      typeof this.gameboard.gameboard[x][y] === "number" &&
      availableGuesses > 0
      //if field was matched(scored) before it will no longer be number
    ) {
      //if it's number, reveal it:
      let newCard = this.gameboard.gameboard[x][y];
      console.log(this.name, "revealed card at", x, y, "value:", newCard);
      this.unchecked.splice(randomNumber, 1); //delete unchecked spot
      //check if we already seen this value
      if (this.memory.get(newCard) && availableGuesses > 1) {
        console.log(this.name, "seen this card, matched");
        let xy = this.memory.get(newCard);
        this.gameboard.gameboard[xy[0]][xy[1]] = "x";
        this.gameboard.gameboard[x][y] = "x";
        this.gameboard.slotsNumber -= 2;
        if (this.gameboard.slotsNumber == 0) {
          this.gameboard.gameover = true;
        }
        availableGuesses = -2;
      } else if (this.memory.get(newCard) && availableGuesses == 1) {
        console.log(this.name, "found match, but i was his 2nd move");
        this.memory.set(newCard, [x, y]);
        this.hasMatchStored = true;
        this.matchedCard = newCard;
        this.matchedXY = [x, y];
        availableGuesses -= 1;
      } else {
        this.memory.set(newCard, [x, y]);
        //didn't have match in memory, 1 guess left
        availableGuesses -= 1;

        if (availableGuesses == 0) {
          return;
        } else this.guess(availableGuesses);
      }
    } else {
      this.unchecked.splice(randomNumber, 1); //this card was already matched
      if (availableGuesses == 0) {
        return;
      } else this.guess(availableGuesses);
    }
  }
}
class Game {
  constructor(gameboard, player1, player2) {
    (this.gameboard = gameboard), (this.player1 = player1);
    this.player2 = player2;
  }
  play() {
    while (!this.gameboard.gameover) {
      this.player1.guess(2);
      // this.checkGO();
      this.player2.guess(2);
      // this.checkGO();
    }
  }
  // checkGO() {
  //   if (this.gameboard.slots == 0) {
  //     this.gameboard.gameover = true;
  //     console.log("Game over");
  //     return;
  //   }
  // }
}

createdboard = new Board(brd);
player1 = new Player(createdboard, "Pszemek");
player2 = new Player(createdboard, "Mariousz");
newGame = new Game(createdboard, player1, player2);
newGame.play();
