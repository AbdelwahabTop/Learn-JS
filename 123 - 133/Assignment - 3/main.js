let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let a = new Map().set("username", "Osama").set("role", "Admin").set("country", "Egypt");
console.log(a);
console.log(a.size);
console.log(a.has("role"));



  // Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true