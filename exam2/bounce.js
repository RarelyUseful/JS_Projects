const board = require("./bounce_board.js").board;
// X and Y axis switched, X are rows, Y are columns;
// Upper left corner is [0][0];
// so vector[2][3] moves ball 2 down and 3 right
// vector [-2][1] moves ball 2 up and 1 right
class Vector {
  constructor(x = 1, y = 1) {
    this.x = x;
    this.y = y;
  }
}

class Ball {
  constructor(x, y, vector, gameboard) {
    this.x = x;
    this.y = y;
    this.gameboard = gameboard;
    this.vector = vector;
  }
  randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  isStartingPosAllowed() {
    let isUpWall = this.gameboard[this.x - 1][this.y] === "X";
    let isDownWall = this.gameboard[this.x + 1][this.y] === "X";
    let isLeftWall = this.gameboard[this.x][this.y - 1] === "X";
    let isRightWall = this.gameboard[this.x][this.y + 1] === "X";
    if ((isLeftWall || isRightWall) && (isUpWall || isDownWall)) {
      this.gameboard[this.x][this.y] = "1"; //Place ball on board
      console.table(this.gameboard);
      // FORCE NEW VECTOR:
      if (isUpWall && isLeftWall) {
        this.vector.x = 1;
        this.vector.y = 1;
      } else if (isUpWall && isRightWall) {
        this.vector.x = 1;
        this.vector.y = -1;
      } else if (isDownWall && isLeftWall) {
        this.vector.x = -1;
        this.vector.y = 1;
      } else if (isDownWall && isRightWall) {
        this.vector.x = -1;
        this.vector.y = -1;
      }
      return true;
    } else {
      console.log("Ball can't be here at start.");
      return false;
    }
  }
  updateVector() {
    //now is never Y because we override it as 1;
    let isNowY = this.gameboard[this.x][this.y] === "Y";
    if (isNowY) {
      let rng = randomInt(1, 3);
      if (rng === 1) {
      } else if (rng === 2) {
        this.vector.y = -this.vector.y;
      } else if (rng === 3) {
        this.vector.x = -this.vector.x;
      }
    }
    //check if there is left/right wall
    if (this.gameboard[this.x][this.y + this.vector.y] === "X") {
      let isLeftWall = this.gameboard[this.x][this.y - 1] === "X";
      let isRightWall = this.gameboard[this.x][this.y + 1] === "X";
      if (isLeftWall) {
        this.vector.y = 1;
      } else if (isRightWall) {
        this.vector.y = -1;
      }
    }
    //check if there is up/down wall
    if (this.gameboard[this.x + this.vector.x][this.y] === "X") {
      let isUpWall = this.gameboard[this.x - 1][this.y] === "X";
      let isDownWall = this.gameboard[this.x + 1][this.y] === "X";
      if (isUpWall) {
        this.vector.x = 1;
      } else if (isDownWall) {
        this.vector.x = -1;
      }
    }
    // Bounce off corner only if there are no walls on X and Y axis
    else if (this.gameboard[this.x + this.vector.x][this.y + this.vector.y] === "X") {
      this.vector.x = -this.vector.x;
      this.vector.y = -this.vector.y;
    }
  }
  move() {
    this.gameboard[this.x][this.y] = "0";
    this.x += this.vector.x;
    this.y += this.vector.y;
    this.gameboard[this.x][this.y] = "1";
    //console.table(this.gameboard);
  }
}

class Game {
  constructor(ball, state = 0) {
    this.ball = ball;
    this.board = ball.gameboard;
    this.state = state;
    this.startingX = ball.x;
    this.startingY = ball.y;
  }
  start() {
    this.ball.updateVector();
    this.state = 1;
    let delay100 = setInterval(() => {
      this.ball.move();
      this.ball.updateVector();
      if (this.isBallBackOnStart()) {
        clearTimeout(delay100);
      }
      console.table(this.ball.gameboard); //this prints tables with every move, kind of GIF
    }, 100);
  }
  isBallBackOnStart() {
    if (this.ball.x == this.startingX && this.ball.y == this.startingY) {
      this.state = 2;

      return true;
    } else return false;
  }
}

function generateBall(someboard, x, y) {
  //utwórz piłkę z vectorem na podstawie boardu
  let newBall = new Ball(x, y, new Vector(), someboard);
  if (newBall.isStartingPosAllowed()) {
    return newBall;
  } else {
    console.error("You messed up. Please enjoy this error message: ");
  }
}
let UserBall = generateBall(board, 8, 5);
let UserGame = new Game(UserBall);
UserGame.start();
