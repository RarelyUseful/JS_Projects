let mainArray = [1,6,23,8,4,8,3,7];

//Create a function that returns the sum of all elements passed in array as parameter. 
function sumArr(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}
console.log('Sum of all elements in mainArray: ' + sumArr(mainArray));

//Create a function that returns sum of first and last elements of given array.
function sumFL(array) {
    let sum = array[0] + array[array.length-1];
    return sum;
}
console.log("Sum of First and Last element in mainArray: " + sumFL(mainArray));

//Create a function that takes a number and return factorial of that number.
function factorial(num) {
    result = 1;
    for (let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}
let f1 = 5;
console.log(`Factorial of ${f1} equals ${factorial(f1)}.`);


//Create a function that returns given array in reverse order. // no build in functions  
function reverseArr(array){
    let rev = []
    for (let i = array.length -1; i >= 0; i--){
        rev.push(array[i]);
    }
    return rev;
}
// OR
function reverseArr2(array){
    let rev = [];
    for (let i = 0; i<array.length; i++){
        rev.unshift(array[i]);
    }
    return rev;
}
console.log(`Original array = ${mainArray}, reversed array = ${reverseArr(mainArray)}.`);
console.log(`   ...reversed array method #2 (unshift) = ${reverseArr2(mainArray)}.`);

//Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f] 
function arrPattern(array){
    let pat = [];
    for(let i = 0; i < array.length; i+=2){
        pat.push(array[i]+array[i+1]);
    }
    return pat;
}
console.log(`New array according to pattern: ${arrPattern(mainArray)}.`);

const mainArray2 = [1,6,23,8,4,8,3];
console.log(`Array without last element = ${mainArray2}.`);

function arrPattern2(array){
    let pat2 = [];
    for(let i = 0; i < array.length; i+=2){
        if ((i+1) == array.length){
            pat2.push(array[i]*2);
        } else { pat2.push(array[i]+array[i+1])}
    }
    return pat2;
}
console.log(`New array according to pattern2: ${arrPattern2(mainArray2)}.`);

//Create a function the return one random element from given array. // use random function
function randomNum(array){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      return array[getRandomInt(0, array.length)];
}
console.log(`Random number from array: ` +randomNum(mainArray));

//Create a function that takes two parameters: array and number off attempts. 
//Based on number of attempts choose a random number from table that many times and return lowest one.
function randomLower(array, number){
    let lower = Math.min();
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    for (let i = 1; i <= number; i++){
       let index = getRandomInt(0, array.length);
       if (array[index] < lower) {lower = array[index]}
    }
    return lower;
}
let arrayX = mainArray;
let numberX = 2;
console.log(`Lowest number in ${numberX} draws from array: ${randomLower(arrayX, numberX)}.`);

//Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. 
//This takes place as long as there are elements in source array. 
function randomizeArr(array){
    let newArr = [];
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    while(array.length >0){
        let moved = array.splice(getRandomInt(0,array.length));
        newArr.push(moved);
    }
    //this function modifies global variable 'mainArray' !!!
    mainArray = [1,6,23,8,4,8,3,7];
    return newArr;
}
console.log(`New random order of mainArray: ${randomizeArr(mainArray)}.`);

//Create a function that on given array will perform operation of adding or subtracting elements. 
//Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
function sumOrSub(array){
    let magic = array[0];
    for (let i = 1; i < array.length; i++){
        if (Math.random() > 0.5){magic+=array[i]}
        else {magic -= array[i]}
    }
    return magic;
}
console.log(`Result of random add/sub of array elements = ${sumOrSub(mainArray)}.`);

//Create a function that will return the current day name in Polish. 
function pokazDzien(){
    const date = new Date();
    let day = date.getDay();
    switch (day) {
        case 0:
            return 'Niedziela';
            break;
        case 1:
            return 'Poniedziałek';
            break;
        case 2:
            return 'Wtorek';
            break;
        case 3:
            return 'Środa';
            break;
        case 4:
            return 'Czwartek';
            break;
        case 5:
            return 'Piątek';
            break;
        case 6:
            return 'Sobota';
            break;
    }
}
console.log(`Dziś jest ${pokazDzien()}.`);

//Create a function that tells us how many days till Friday 
function daysToFriday(){
    let date = new Date();
    let today = date.getDay();
    return 5-today;
}
console.log(`Days to friday: ${daysToFriday()}.`);

//Create a function that take two numbers and return the object with 4 fields. 
//Result on 4 basic arithmetic operations. 
function doBasics(x, y){
    console.log("Sum: "+ (x+y));
    console.log("Sub: "+ (x-y));
    console.log("Mul: "+ (x*y));
    console.log("Div: "+ (x/y));
}
doBasics(10, 3);