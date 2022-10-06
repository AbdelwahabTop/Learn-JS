/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here 
// 1----->
let my1 = my.reverse().slice(--counter)
console.log(my1); // ["Osama", "Elham", "Mazero", "Ahmed"];

// 2------>
console.log(my.slice(++counter, my.length - ++zero)); // ["Elham", "Mazero"]
console.log(my)

// 3--------->
my.splice(--zero, my.length, "Elzero");
let my2 = my.toString();
console.log(my2); // "Elzero"

let b = my[zero][++counter];
let c = my[zero][++counter].toUpperCase();
let d = b.concat(c);
console.log(d); //"rO"