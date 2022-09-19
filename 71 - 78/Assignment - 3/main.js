let myArray = ["E", "l", "z", ["e", "r"], "o"];

myArray.splice(3 ,1 , myArray[3].reduce(function (a,b) {return `${a}${b}`;}));
let newArray = myArray.reduce (function (a, b) {return a + b})
console.log(newArray);

// Elzero