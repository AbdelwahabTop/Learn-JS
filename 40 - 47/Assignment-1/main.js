let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
let myFriends2 = myFriends;
myFriends2.pop();
console.log(myFriends2); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(0, num)); // ["Ahmed", "Elham", "Osama"];