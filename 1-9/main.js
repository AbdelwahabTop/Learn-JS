// assignment 2
document.write("<h2>Elzero</h2>")
document.querySelector("h2").style.color = 'blue'
document.querySelector("h2").style.font = "bold 80px Arial"
document.querySelector("h2").style.textAlign = "center"
    //other sol
document.write("<h3>Elzero</h3>");
let Elzero = document.getElementsByTagName("h3")[0];
Elzero.style.color = "blue";
Elzero.style.font =  "bold 80px Arial";
Elzero.style.textAlign = "center";

//assignment 3
console.log("%cElzero %cWeb %cSchoole", "color: red;", "color: blue", "color: green")

//assignment 4
console.group("group 1")
console.log("massage one")
console.log("massage two")
console.group("Child Group")
console.log("massage one")
console.log("massage two")
console.group("Grand Child Group")
console.log("massage one")
console.log("massage two")
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2")
console.log("massage one")
console.log("massage two")
console.groupEnd();

//assignment 5
console.table(["Elzero", "ahmed", "sameh", "aya"])

//assignment 6

//console.log("Iam In Console");
//document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/