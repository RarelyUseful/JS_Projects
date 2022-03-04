let sudoku = [
  [7, 0, 4, 8, 0, 0, 3, 0, 1],
  [8, 2, 0, 5, 0, 0, 0, 4, 0],
  [0, 0, 9, 4, 3, 0, 5, 0, 0],
  [3, 1, 0, 0, 0, 0, 8, 0, 7],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [9, 0, 7, 0, 0, 0, 0, 3, 2],
  [0, 0, 6, 0, 1, 5, 4, 0, 0],
  [0, 7, 0, 0, 0, 9, 0, 6, 5],
  [5, 0, 8, 0, 0, 2, 1, 0, 3],
];
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solveSudoku(ArrOfArr) {
  //while (ArrOfArr.some(row => row.includes(0))){
  /* This line above is super-unoptimized, so i changed it. 
         It needs to run once, record how many zeros there is and then run loop this amount of times. */
  let counter = 0;
  for (let i = 0; i < ArrOfArr.length; i++) {
    for (let j = 0; j < ArrOfArr[0].length; j++) {
      if (ArrOfArr[i][j] == 0) {
        counter++;
      }
    }
    for (let i = 0; i < counter; i++) {
      for (let i = 0; i < ArrOfArr.length; i++) {
        for (let j = 0; j < ArrOfArr[i].length; j++) {
          if (ArrOfArr[i][j] === 0) {
            let taken = [];
            let available = [];
            taken = [].concat(checkSquare(ArrOfArr, i, j));
            taken = taken.concat(checkRow(ArrOfArr, i));
            taken = taken.concat(checkColumn(ArrOfArr, j));
            available = digits.filter((x) => !taken.includes(x));
            if (available.length === 1) {
              ArrOfArr[i][j] = available[0];
            }
          }
        }
      }
    }
  }
}
function checkSquare(ArrOfArr, x, y) {
  let a = parseInt(x / 3) * 3;
  let b = parseInt(y / 3) * 3;
  let arrayS = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (ArrOfArr[a + i][b + j] != 0) {
        arrayS.push(ArrOfArr[a + i][b + j]);
      }
    }
  }
  return arrayS;
}

function checkRow(ArrOfArr, i) {
  let arrayR = [];
  for (let j = 0; j < 9; j++) {
    if (ArrOfArr[i][j] != 0) {
      arrayR.push(ArrOfArr[i][j]);
    }
  }
  return arrayR;
}

function checkColumn(ArrOfArr, j) {
  let arrayC = [];
  for (let i = 0; i < 9; i++) {
    if (ArrOfArr[i][j] != 0) {
      arrayC.push(ArrOfArr[i][j]);
    }
  }
  return arrayC;
}

console.log("Original sudoku: \n" + sudoku.join("\n"));
solveSudoku(sudoku);
console.log("Solved sudoku: \n" + sudoku.join("\n"));

/* Prints sudoku in one line */
// console.log("O: "+sudoku.join());
// solveSudoku(sudoku);
// console.log("s: "+sudoku.join());

/* This is how fiter works: */
// let deleteThis = [1, 1, 4, 5, 6, 7, 7, 7, 8, 9, 9, 0]
// let newarr = digits.filter(x => !deleteThis.includes(x));
// console.log(digits);
// console.log(deleteThis);
// console.log(newarr);
