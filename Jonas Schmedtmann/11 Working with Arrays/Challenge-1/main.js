// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
const juliaD = [9, 16, 6, 8, 3], kateD = [10, 5, 6, 1, 4];





checkDogs = function(arr1, arr2) {
        const juliaCopy = arr1.slice().splice(1, 2);
        console.log(juliaCopy);
        const corrected = juliaCopy.concat(arr2)
        console.log(corrected);
        corrected.forEach(function (dog, i) {
            console.log(dog >= 3 ? `Dog number ${i+1} is an adult, and is ${dog} years old` : `Dog number ${i+1} is still a puppy 🐶`); 
        });
    
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);