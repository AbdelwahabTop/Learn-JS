document.querySelector("p").remove();
myDiv = document.querySelector(".our-element");

let start = document.createElement("div");

start.before(myDiv)
start.innerHTML = "start";
start.className = "start";
start.title = "Start Element"
start.setAttribute("data-value", "Start");
myDiv.before(start);


let end = document.createElement("div");
end.innerHTML = "End";
end.className = "end";
end.title = "End Element"
end.setAttribute("data-value", "End");
myDiv.after(end);