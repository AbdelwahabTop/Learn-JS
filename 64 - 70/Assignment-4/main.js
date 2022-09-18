function specialMix(...data) {
    // Your Code Here
    let num = 0;
    for (let i = 0; i < data.length; i++) {
        let z = parseInt(data[i]);
        if (isNaN(z)) {
            continue;
        }
        else {
            num += z
        }
    }
    return  num == 0 ? "All Is Strings" : num;
}

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings