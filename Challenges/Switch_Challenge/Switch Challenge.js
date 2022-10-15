/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

switch (job) {
    case "Manager":
        console.log(salary = 8000);
        break;
    case "IT":
    case "Support":
        console.log(salary = 6000);
        break;
    default:
        console.log(salary = 4000);
        break;
}





/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}


if (holidays = 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if (holidays = 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if (holidays = 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if (holidays = 5) {
    money = 0;
    console.log(`My Money is ${money}`);
}
else {
    money = 0;
    console.log(`My Money is ${money}`);
}
