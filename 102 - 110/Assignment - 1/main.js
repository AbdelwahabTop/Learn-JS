let prom = window.prompt("Print Number From – To", "Example: 5-20");
let num = prom.split("-");
let snum = Math.min(...num);
let lnum = Math.max(...num);
/*
if (num[0] < num[1]) {
    snum = +num[0]; 
    lnum = +num[1];
}
else {
    snum = +num[1]; 
    lnum = +num[0];
}
*/
for (let i = snum; i <= lnum; i++) {
    console.log(i);
}
