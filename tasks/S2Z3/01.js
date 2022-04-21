/*  
array is not transposed, so [x][y] x = row, y = column.

*/
"use strict";
const treasure = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];

function hunt(array, startingPoint) {
  let row = parseInt(startingPoint / 10) - 1;
  let column = Number(startingPoint % 10) - 1;
  console.log("Checking clue: " + startingPoint);
  console.log("found value: " + array[row][column]);

  if (array[row][column] === startingPoint) {
    console.log("Congrats, you found treasure on spot " + startingPoint);
  } else {
    hunt(array, array[row][column]);
  }
}

hunt(treasure, 11);
