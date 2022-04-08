// Write a program that finds the longest palindromic substring of a given string.
// ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.

"use strict";

class Execute {
  constructor(func, input) {
    this.func = func;
    this.input = input;
  }
  Print() {
    console.log(this.func(this.input));
  }
  Get() {
    return this.func(this.input);
  }
}

class MyFunctions {
  findPalindrome(word) {
    let longest = "";
    for (let i = 0; i < word.length; i++) {
      // look for duplicated letter
      if (word[i] === word[i + 1]) {
        let temp = word.slice(i, i + 2); //assign start value as duplicated letter
        for (let j = 1; j <= i && j < word.length - i; j++) {
          if (word[i - j] === word[i + 1 + j]) {
            //check if adjacent letters are a match
            temp = word.slice(i - j, i + j + 2);
          } else j = word.length; //escape the loop, no need to look further
        }
        if (temp.length > longest.length) {
          longest = temp;
        }
      }
      // not duplicated letter:
      if (word[i] === word[i + 2]) {
        let temp = word.slice(i, i + 3);
        for (let j = 1; j <= i && j < word.length - i; j++) {
          if (word[i - j] === word[i + 2 + j]) {
            temp = word.slice(i - j, i + j + 3);
          } else j = word.length; //escape the loop, no need to look further
        }
        if (temp.length > longest.length) {
          longest = temp;
        }
      }
    }
    return longest;
  }
}

/*
"ababbaaahaa"
"karakis"
"inni"
"sedes"
"baerren"
"LL Cool J"
*/

let myFunc = new MyFunctions();
let runThisShit = new Execute(myFunc.findPalindrome, "baerren");
runThisShit.Print();
