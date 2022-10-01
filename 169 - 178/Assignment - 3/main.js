let request = new XMLHttpRequest(), mainData
request.open("GET", "./articles.json");
request.send();
request.onreadystatechange = function () {
    if (request.status == 200 && request.readyState == 4) {
        let mainData = JSON.parse(this.responseText);
        console.log(mainData);
        Object.keys(mainData).forEach( function (e) {
            mainData[e].category = "ALL"
        })
        console.log(mainData);
        updatedData = JSON.stringify(mainData);
        console.log(updatedData)
    }
}
