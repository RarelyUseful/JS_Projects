class Spot {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.isBall = isBall;
    this.isBounceable = isBounceable;
    this.isBreakable = isBreakable;
    this.isRandomizing = isRandomizing;
    this.isCorner = isCorner;
    this.isStartingPos = isStartingPos;
    this.backimg = backimg;
    this.isEditable = isEditable;
  }
}

class SpotX extends Spot {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    isBall = false;
    isBounceable = true;
    isBreakable = false;
    isRandomizing = false;
    isCorner = false;
    isStartingPos = false;
    background;
    isEditable = true;
  }
}
class Empty extends Spot {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    isBall = false;
    isBounceable = false;
    isBreakable = false;
    isRandomizing = false;
    isCorner = false;
    isStartingPos = false;
    background;
    isEditable = true;
  }
}

class SpotY extends Spot {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    isBall = false;
    isBounceable = false;
    isBreakable = true;
    isRandomizing = true;
    isCorner = false;
    isStartingPos = false;
    background;
    isEditable = true;
  }
}
class SpotB extends Spot {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    isBall = false;
    isBounceable = true;
    isBreakable = true;
    isRandomizing = false;
    isCorner = false;
    isStartingPos = false;
    background;
    isEditable = true;
  }
}
