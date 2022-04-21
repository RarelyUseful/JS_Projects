const myboard = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

class Board {
  constructor(board, takenSpots = [], attackedSpots = []) {
    this.takenSpots = takenSpots;
    this.board = board;
    this.attackedSpots = attackedSpots;
  }

  randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  randomSpace() {
    const spot = [this.randomInt(0, 7), this.randomInt(0, 7)];
    if (this.board[spot[0]][spot[1]] === 0) {
      this.takenSpots.push(spot);
      return spot;
    } else {
      this.randomSpace();
    }
  }
}

class Game {
  constructor(gameboard, pieces = [], gameover = false) {
    this.gameboard = gameboard;
    this.pieces = pieces;
    this.gameover = gameover;
  }

  play() {
    while (!this.gameover) {
      this.pieces.push(this.addPiece());
      if (this.pieces.length > 1) {
        this.pieces.forEach((element) => {
          element.attack();
          if (element.canTake === true) {
            console.table(this.gameboard.board);
            this.gameover = true;
          }
        });
      }
    }
  }
  addPiece() {
    let spot = this.gameboard.randomSpace();
    let figure = this.gameboard.randomInt(1, 2);
    switch (figure) {
      case 1:
        let newKing = new King(this.gameboard, spot[0], spot[1]);
        this.gameboard.board[spot[0]][spot[1]] = newKing;
        return newKing;
      case 2:
        let newQueen = new Queen(this.gameboard, spot[0], spot[1]);
        this.gameboard.board[spot[0]][spot[1]] = newQueen;
        return newQueen;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;

      default:
        break;
    }
  }
}
class King {
  constructor(board, positionRow, positionCol, canTake = false) {
    this.positionRow = positionRow;
    this.positionCol = positionCol;
    this.board = board;
    this.canTake = canTake;
  }
  attack() {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        let newX = this.positionRow + x;
        let newY = this.positionCol + y;
        if (x === 0 && y === 0) {
          //do nothing :)
        } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
          if (this.board.board[newX][newY] !== 0) {
            console.log(`King at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`);
            this.canTake = true;
          }
        }
      }
    }
    // return false;
  }
}
class Queen {
  constructor(board, positionRow, positionCol, canTake = false) {
    this.positionRow = positionRow;
    this.positionCol = positionCol;
    this.board = board;
    this.canTake = canTake;
  }
  attack() {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        let newX = this.positionRow + x;
        let newY = this.positionCol + y;
        if (x === 0 && y === 0) {
          //do nothing :)
        } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
          if (this.board.board[newX][newY] !== 0) {
            console.log(`Queen at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`);
            this.canTake = true;
          }
        }
      }
    }
    // return false;
  }
}

let myNewBoard = new Board(myboard);
let myNewGame = new Game(myNewBoard);
myNewGame.play();
