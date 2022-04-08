// Write a program that automatically converts English text to Morse code and vice versa.

"use strict";
const morseEnum = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

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
  // for some reason Enum is not recognized when in class

  toMorse(input) {
    let translated = input
      .toUpperCase()
      .split("")
      .map((x) => {
        return morseEnum[x];
      });
    // console.log(translated.toString().replace(/,/g, " "));
    return translated.toString().replace(/,/g, " ");
  }
  fromMorse(input) {
    let translated = input.split(" ").map((x) => {
      return Object.keys(morseEnum).find((key) => morseEnum[key] === x);
    });
    // console.log(translated.toString().replace(/,/g, " "));
    return translated.toString().replace(/,/g, " ");
  }
}
/*
"sos"
"Anakin Skywalker 07"
"... --- ...")
".- -. .- -.- .. -.  ... -.- -.-- .-- .- .-.. -.- . .-.  ----- --...")
*/
let myFunc = new MyFunctions();
let runThisShit = new Execute(myFunc.toMorse, "sos");
runThisShit.Print();
let runThisShit2 = new Execute(myFunc.fromMorse, "... --- ...");
runThisShit2.Print();
