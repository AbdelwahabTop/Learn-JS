let eOne = document.querySelector(".one");
let eTwo = document.querySelector(".two");

let cOne = document.querySelector(".one").getAttribute("title");
eOne.title = document.querySelector(".two").getAttribute("title");
let tTwo = document.querySelector(".two").innerHTML;
let num = typeof cOne === "string";
eTwo.innerHTML = `${eOne.innerHTML} ${++num}`  

eOne.innerHTML = tTwo;

eTwo.title = cOne;

console.log(eOne);
console.log(eTwo);
