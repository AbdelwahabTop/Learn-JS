let myString = "EElllzzzzzzzeroo";

let elzero = myString.split("").filter(function (el, i) {
    return myString[i] !== myString[i+1];
}).reduce (function (acc, curr) {return acc + curr}) 
console.log(elzero);
// Elzero