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
  constructor(board, attackedSpots = []) {
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
            this.gameover = true;
          }
        });
      }
    }
    console.table(this.gameboard.board);
  }
  addPiece() {
    let spot = this.gameboard.randomSpace();
    let figure = this.gameboard.randomInt(1, 5);
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
        let newBishop = new Bishop(this.gameboard, spot[0], spot[1]);
        this.gameboard.board[spot[0]][spot[1]] = newBishop;
        return newBishop;
      case 4:
        let newRook = new Rook(this.gameboard, spot[0], spot[1]);
        this.gameboard.board[spot[0]][spot[1]] = newRook;
        return newRook;
      case 5:
        let newKnight = new Knight(this.gameboard, spot[0], spot[1]);
        this.gameboard.board[spot[0]][spot[1]] = newKnight;
        return newKnight;

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
        for (let z = 1; z <= 8; z++) {
          let newX = this.positionRow + x * z;
          let newY = this.positionCol + y * z;
          if (x === 0 && y === 0) {
            //do nothing :)
          } else if (newX > 7 || newY > 7 || newX < 0 || newY < 0) {
            z = 9; // if we got out of the board, we escape Z-loop
          } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
            if (this.board.board[newX][newY] !== 0) {
              console.log(`Queen at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`);
              this.canTake = true;
            }
          }
        }
      }
    }
  }
}
class Bishop {
  constructor(board, positionRow, positionCol, canTake = false) {
    this.positionRow = positionRow;
    this.positionCol = positionCol;
    this.board = board;
    this.canTake = canTake;
  }
  attack() {
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        for (let z = 1; z <= 8; z++) {
          let newX = this.positionRow + x * z;
          let newY = this.positionCol + y * z;
          if (x === 0 && y === 0) {
            //do nothing :)
          } else if (newX > 7 || newY > 7 || newX < 0 || newY < 0) {
            z = 9; // if we got out of the board, we escape Z-loop
          } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
            if (this.board.board[newX][newY] !== 0) {
              console.log(
                `Bishop at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`
              );
              this.canTake = true;
            }
          }
        }
      }
    }
  }
}
class Rook {
  constructor(board, positionRow, positionCol, canTake = false) {
    this.positionRow = positionRow;
    this.positionCol = positionCol;
    this.board = board;
    this.canTake = canTake;
  }
  attack() {
    for (let x = -1; x <= 1; x += 2) {
      let y = 0; //checking only one vector
      for (let z = 1; z <= 8; z++) {
        let newX = this.positionRow + x * z;
        let newY = this.positionCol + y * z;
        if (x === 0 && y === 0) {
          //do nothing :)
        } else if (newX > 7 || newY > 7 || newX < 0 || newY < 0) {
          z = 9; // if we got out of the board, we escape Z-loop
        } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
          if (this.board.board[newX][newY] !== 0) {
            console.log(`Rook at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`);
            this.canTake = true;
          }
        }
      }
    }
    for (let y = -1; y <= 1; y += 2) {
      let x = 0;
      for (let z = 1; z <= 8; z++) {
        let newX = this.positionRow + x * z;
        let newY = this.positionCol + y * z;
        if (x === 0 && y === 0) {
          //do nothing :)
        } else if (newX > 7 || newY > 7 || newX < 0 || newY < 0) {
          z = 9; // if we got out of the board, we escape Z-loop
        } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
          if (this.board.board[newX][newY] !== 0) {
            console.log(`Rook at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`);
            this.canTake = true;
          }
        }
      }
    }
  }
}
class Knight {
  constructor(board, positionRow, positionCol, canTake = false) {
    this.positionRow = positionRow;
    this.positionCol = positionCol;
    this.board = board;
    this.canTake = canTake;
  }
  attack() {
    for (let x = -2; x <= 2; x += 4) {
      for (let y = -1; y <= 1; y += 2) {
        let newX = this.positionRow + x;
        let newY = this.positionCol + y;
        if (x === 0 && y === 0) {
          //do nothing :)
        } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
          if (this.board.board[newX][newY] !== 0) {
            console.log(`Knight at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`);
            this.canTake = true;
          }
        }
      }
    }
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -2; y <= 2; y += 4) {
        let newX = this.positionRow + x;
        let newY = this.positionCol + y;
        if (x === 0 && y === 0) {
          //do nothing :)
        } else if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
          if (this.board.board[newX][newY] !== 0) {
            console.log(`Knight at ${this.positionRow}${this.positionCol} can take piece at ${newX}${newY}`);
            this.canTake = true;
          }
        }
      }
    }
  }
}
let myNewBoard = new Board(myboard);
let myNewGame = new Game(myNewBoard);
myNewGame.play();

// for (let i = 0; i < 65; i++) {
//   let x = myNewBoard.randomSpace();
//   console.log(x[0] + " " + x[1]);
// }
