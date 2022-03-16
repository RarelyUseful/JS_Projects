/* Write a class that prints the list of the first n Fibonacci numbers. 
The first two Fibonacci numbers are 1 and 1. 
The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8. */

class PrintFunction {
  constructor(chooseneng, number) {
    this.chooseneng = chooseneng;
    this.number = number;
  }
  Print() {
    return this.chooseneng(this.number);
  }
}

class FuncEngine {
  Fibonacci(number) {
    number = parseInt(number);
    if (number > 1) {
      let arr = [1, 1];
      for (let i = 2; i < number; i++) {
        let temp = Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]);
        arr.push(temp);
      }
      return arr;
    } else if (number > 0 && number <= 1) {
      return [1];
    } else return "Number should be integer and bigger than 0.";
  }
}
let chosenEngine = new FuncEngine();
let funcToPrint = new PrintFunction(chosenEngine.Fibonacci, 12);
console.log(funcToPrint.Print());
