/* Write a code that takes a number/string and returns a list of its digits. 
So for 2342 it should return [2,3,4,2].
’A243b’ -> [2,4,3]. */
const trash0 = "0A20b0";
const trash1 = "A206b";
const trash2 = 224680;

function getNumbers(input) {
  let digits = [];
  input
    .toString()
    .replace(/[^0-9]/g, "")
    .split("")
    .map((x) => digits.push(x));
  console.log(digits);
}

getNumbers(trash2);
getNumbers(trash1);
getNumbers(trash0);
