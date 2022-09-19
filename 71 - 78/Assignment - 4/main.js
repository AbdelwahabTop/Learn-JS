let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let a = numsAndStrings.filter(function(el){return !isNaN(parseInt(el))}).map(function(el){return -el});
console.log(a);
// [-1, -10, 10, 20, -5, -3]