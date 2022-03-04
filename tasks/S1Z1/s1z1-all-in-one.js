//1 Find leap years in array
let arr1 = [1974, 1900, 1985, 2000]; 
console.log("Leap years found in array:"); //improves visibility
for (let i = 0; i < arr1.length; i++) { 
    if ((arr1[i] % 4 === 0 && arr1[i] % 100 !== 0) || (arr1[i] % 400 === 0)) {
        console.log(arr1[i]);
    }
};

function factorialOf(x){
    console.log(`Factorial of ${x} eqals:`); // improves visibility
    let result = 1; 
    while (x>0){
        result *= x;
        x--;}
    console.log(result);
}
factorialOf(4);  // put in () number you want

function findMin(array){
    let min = Math.min(); //sets var min to Infinity... Math.max sets it to -Infinity
    for (let i = 0; i < array.length; i++){
        if (array[i] < min) {
            min = array[i]}  
    }
    console.log(`Lowest number in array is ${min}`);
}

let array1 = [55, 66, 56, 22, 5];
findMin(array1);

console.log(Math.min.apply(null, array1)); // build-in function.
console.log(Math.min(...array1)); // build-in function.

// sum odd numbers
let array2 = [1,6,23,8,4,98,3,7,3,98,4,98]
let sumOdds = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
        sumOdds += array2[i];
    }
}
console.log(`Sum of odd numbers = ${sumOdds}`);

//MIN AND MAX
let array3 = [1,6,23,8,4,98,3,7,3,98,4,98];
let max1 = Math.max();
let min1 = Math.min();
for (let i = 0; i < array3.length; i++) {
    if (array3[i] < min1) {min1 = array3[i]}
    else if (array3[i] > max1) {max1 = array3[i]}
}
console.log(`Min num = ${min1}, max num = ${max1}`)

//5) Choose longest string from the array. 
let array5 = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend']; 
let longest5 = '';
for (let i = 0; i<array5.length; i++) {
    if (array5[i].length > longest5.length) { longest5 = array5[i]}
}
console.log('Longest string is: ' +longest5);
// 6) Choose all the indexes on the highest value from the given array. 
let array6 = [1,6,23,8,4,98,3,7,3,98,4,98];
let highest6 = Math.max();
let index6 = [];
for (let i = 0; i<array6.length; i++){
    if (array6[i] > highest6){
        highest6 = array6[i];
        index6 = [];
        index6.push(i);
    }
    else if (array6[i] == highest6){
        index6.push(i);
    }
}
console.log(`Highest number is ${highest6} and indexes are ${index6}`)
// 7) Calculate average value from the given array for even numbers 
let array7 = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum7 = 0;
let num7 = 0;
for (let i = 0; i<array6.length; i++){
    if (array7[i]%2 == 0){
        sum7+=array7[i];
        num7++}
}
console.log(`Average value of even numbesrs is ${sum7/num7}`);
// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. 
let arr8 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum8 = 0;
let index8 = 0;
for (i = 0; i < arr8.length; i++) {
    if (i % 2 === 0 && i !== 0) {
        sum8 += arr8[i];
        index8++;
    }
};
console.log(`Average value of items form even indexes is: ${sum8 / index8}`);
// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones.
let arr9 = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let sum9 = 0;
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] % 2 === 0) {
        sum9 += arr9[i];
    } else if (arr9[i] % 2 !== 0) {
        sum9 -= arr9[i];
    } 
};
console.log(`Result of adding even numbers and substracting odd ones is ${sum9}.`);