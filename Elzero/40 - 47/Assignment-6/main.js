let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().slice(-arr1.length).join("").toLowerCase();
// Your Code Here

console.log(allArrs); // fxy