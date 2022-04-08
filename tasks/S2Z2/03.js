// Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
let t1 = "karol";
let t2 = "roki";

function findSubseq(word1, word2) {
  // optimization idea #1:
  input1 = word1.toString().toUpperCase();
  input2 = word2.toString().toUpperCase();

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
        console.log("hit " + i + " " + j + " temp: " + temp);
      } else {
        console.log("miss " + i + " " + j);
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
  console.log(longest);
}
//findSubseq(t1, t2);
findSubseq("String_ABs", "ring_Bg");

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
