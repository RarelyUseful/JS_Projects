/* Write a function that rotates a list by k elements. 
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
Try solving this without creating a copy of the list. */

function rotate(arr, num) {
  for (let i = 0; i < num; i++) {
    let temp = arr.shift();
    arr.push(temp);
  }
  console.log(arr);
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
rotate(myArray, 2);
