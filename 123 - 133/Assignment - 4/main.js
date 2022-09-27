let theNumber = 100020003000;


console.log([...new Set(theNumber.toString())].filter(function(el) {return el > 0}).join(""))

// Needed Output
// 123