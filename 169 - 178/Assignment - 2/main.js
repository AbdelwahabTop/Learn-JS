// Needed Output
"JSON Object Content Here"
"Data Loaded"
let request = new XMLHttpRequest();
request.open("GET", "./articles.json", true);
request.send();
request.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
        let jsObj = JSON.parse(request.responseText);
        console.log("JSON Object Content Here");
        console.log(jsObj[2].author);
        console.log("Data Loaded");
    }
};
// let jsObj = JSON.parse(request);
// console.log(jsObj);