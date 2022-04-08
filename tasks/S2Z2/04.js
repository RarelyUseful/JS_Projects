// Write a code that multiplies two matrices together. Dimension validation required.

mat1 = [
  [1, 2, 3],
  [4, 5, 6],
];
mat2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

function multiplyMatrice(m1, m2) {
  rows_m1 = m1.length;
  col_m1 = m1[0].length;
  rows_m2 = m2.length;
  col_m2 = m2[0].length;
  //check if task can be done
  if (col_m1 != rows_m2) {
    throw "Matrices cannot be multiplied";
  } else {
    //create empty 2dArray
    let multiplication = new Array(rows_m1); // creates Array with m1.lenght spaces,
    for (x = 0; x < multiplication.length; x++) {
      // enter each space,
      multiplication[x] = new Array(col_m2).fill(0); // fill with m2[0].lenght spaces valued 0.
    }

    //actual multipication
    for (x = 0; x < multiplication.length; x++) {
      for (y = 0; y < multiplication[x].length; y++) {
        for (z = 0; z < col_m1; z++) {
          multiplication[x][y] = multiplication[x][y] + m1[x][z] * m2[z][y];
        }
      }
    }
    return multiplication;
  }
}

function printArray2D(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray2D(multiplyMatrice(mat1, mat2));
