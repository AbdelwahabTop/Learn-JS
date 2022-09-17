let months = "" 

function ageInTime(theAge) {
    // Your Code Here
    if (theAge > 100 || theAge < 10) {
        console.log("Age Out Of Range") 
    }
    else {
        console.log(`years: ${theAge}`);
        console.log(`months: ${theAge * 12}`);
        console.log(`weeks: ${theAge * 12 * 4} `);
        console.log(`Days: ${theAge * 12 * 4 * 7} `);
        console.log(`Hours: ${theAge * 12 * 4 * 7 * 24} `);
        console.log(`Minutes: ${theAge * 12 * 4 * 7 * 24 * 60} `);
        console.log(`Seconds: ${theAge * 12 * 4 * 7 * 24 * 60 * 60} `);
    }

}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months 