const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

  // Write Your Destructuring Assignment Here
let {age: a, working: w} = member

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
let {country: c} = member
console.log(`I Live in ${c}`);
  // I Live in Egypt
let {hobbies: [h1, ,h3]} = member
console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming