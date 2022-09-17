function checkStatus(a, b, c) {
    // Your Code Here
    let nm = "", age = "", bool = ""
    for (let i = 0; i < 3; i++) {
      if (typeof checkStatus.arguments[i] === "string") {
        nm = checkStatus.arguments[i];
      }
      else if (typeof checkStatus.arguments[i] === "number") {
        age = checkStatus.arguments[i]
      }
      else if (typeof checkStatus.arguments[i] === "boolean") {
        if (checkStatus.arguments[i] === true) {
          bool = "You Are Available For Hire"
        }
        else {
          bool = "You Are Not Available For Hire"
        }
      }
    }
    console.log(`Hello ${nm}, Your Age Is ${age}, ${bool}`)
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"