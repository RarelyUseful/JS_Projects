// Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
class Execute {
  constructor(func, input, input2) {
    this.func = func;
    this.input = input;
    this.input2 = input2;
  }
  Print() {
    console.log(this.func(this.input, this.input2));
  }
  Get() {
    return this.func(this.input, this.input2);
  }
}

class MyFunctions {
  // findSubseq(input1, input2) {
  findSubseq(word1, word2) {
    // optimization idea #1:
    let input1 = word1.toString().toUpperCase();
    let input2 = word2.toString().toUpperCase();
    // optimization idea #2:
    // maybe force longer string to be input1?
    let longest = "";
    for (let i = 0; i < input1.length; i++) {
      let temp = "";
      let hits = 0;
      for (let j = 0; j < input2.length; j++) {
        if (input2[j] == input1[i + hits]) {
          temp += input2[j];
          hits++;
          // console.log("hit " + i + " " + j + " temp: " + temp); //DEBUGGING
        } else {
          // console.log("miss " + i + " " + j);  //DEBUGGING
          if (hits > 0) {
            j--;
          }
          i = i + hits;
          hits = 0;
          if (temp.length > longest.length) {
            longest = temp;
          }
        }
      }
    }
    return longest;
  }
}
let myFunc = new MyFunctions();
let runThisShit = new Execute(myFunc.findSubseq, "String_ABC", "ring_B");
runThisShit.Print();
/*
How i plan my algorithm to work: 

i:    01234567
      String_A
j: 0 r..x    ?Resume Here
   1 i.. x
   2 n..  x
   3 g..   x
   4 _..    x
   5 B..     . <-Save and go directly up. So increase I with amount of hits.


*/
