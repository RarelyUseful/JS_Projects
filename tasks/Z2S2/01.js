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

function translateToMorse(text) {
  let translated = text
    .toUpperCase()
    .split("")
    .map((x) => {
      return morseEnum[x];
    });
  return translated.toString().replace(/,/g, " ");
  //   return translated.toString().replaceAll(",", " "); // Throws error: replaceAll is not a function... ?!
}
function translateFromMorse(text) {
  let translated = text.split(" ").map((x) => {
    return Object.keys(morseEnum).find((key) => morseEnum[key] === x);
  });
  return translated.toString().replace(/,/g, " ");
}
console.log(translateToMorse("sos"));
console.log(translateToMorse("Anakin Skywalker 07"));
console.log(translateFromMorse("... --- ..."));
console.log(translateFromMorse(".- -. .- -.- .. -.  ... -.- -.-- .-- .- .-.. -.- . .-.  ----- --..."));
