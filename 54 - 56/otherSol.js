let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

for (index; index < friends.length; index++) {
    if (typeof(friends[index]) === 'number') continue;
    if (friends[index].startsWith('A')) continue;
    counter++
    console.log(`${counter} => ${friends[index]}`);
}