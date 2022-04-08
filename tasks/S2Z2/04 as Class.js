// Write a code that multiplies two matrices together. Dimension validation required.

class Execute {
  constructor(func, input, input2) {
    this.func = func;
    this.input = input;
    this.input2 = input2;
  }

  Print() {
    console.log(this.func(this.input, this.input2));
  }
  Print2DArray() {
    let arr = this.func(this.input, this.input2);
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  Get() {
    return this.func(this.input, this.input2);
  }
}
class MyFunctions {
  multiplyMatrice(m1, m2) {
    let rows_m1 = m1.length;
    let col_m1 = m1[0].length;
    let rows_m2 = m2.length;
    let col_m2 = m2[0].length;
    //check if task can be done
    if (col_m1 != rows_m2) {
      throw "Matrices cannot be multiplied";
    } else {
      //create empty 2dArray
      let multiplication = new Array(rows_m1); // creates Array with m1.lenght spaces,
      for (let i = 0; i < multiplication.length; i++) {
        // enter each space,
        multiplication[i] = new Array(col_m2).fill(0); // fill with m2[0].lenght spaces valued 0.
      }

      //actual multipication
      for (let i = 0; i < multiplication.length; i++) {
        for (let j = 0; j < multiplication[i].length; j++) {
          for (let k = 0; k < col_m1; k++) {
            multiplication[i][j] = multiplication[i][j] + m1[i][k] * m2[k][j];
          }
        }
      }
      return multiplication;
    }
  }
}

mat1 = [
  [1, 2, 3],
  [4, 5, 6],
];
mat2 = [
  [4, 40],
  [5, 50],
  [6, 60],
];
let myFunc = new MyFunctions();
let runThisShit = new Execute(myFunc.multiplyMatrice, mat1, mat2);
runThisShit.Print2DArray();
// runThisShit.Print();
