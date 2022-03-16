/* Write a program that prints all prime numbers in given range. Take sub from 1-100. */
function printPrimesInRange(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    console.log("Range can't include negative numbers. Fix it yourself, i'm not your mom.");
    return;
  }
  let startRange = num1;
  let endRange = num2;
  if (num2 < num1) {
    startRange = num2;
    endRange = num1;
  }
  for (i = startRange; i <= endRange; i++) {
    if (i == 2 || i == 3 || i == 5) {
      console.log(i);
    }
    if (i > 1 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
      let maxDivider = parseInt(i / 3) + 1;
      let isPrime = true;
      for (let j = 7; j < maxDivider; j += 2) {
        if (i % j == 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        console.log(`${i}`);
      }
    }
  }
}

// printPrimesInRange(-1, 100);
// printPrimesInRange(1, 99);
printPrimesInRange(100, 299);

// printPrimesInRange(100, 1);
