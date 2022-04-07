// Write a program that finds the longest palindromic substring of a given string.
// ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.

"use strict";

//

let word = "innikarrak";
let longest = "";
for (let i = 0; i < word.length - 1; i++) {
  if (word[i] === word[i + 1]) {
    let temp = "";
    temp = word.slice(i, i + 2);
    for (let j = 1; j <= i && j < word.length - i; j++) {
      if (word[i - j] === word[i + 1 + j]) {
        temp = word.slice(i - j, i + j + 2);
      }
    }
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
}
console.log(longest);
