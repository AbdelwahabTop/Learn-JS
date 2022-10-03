for (let i = 0; i < 100; i++) {
  let myElement = document.createElement("div");
  myElement.setAttribute("class", "product");
  let head = document.createElement("h3");
  let para = document.createElement("p");
  let text1 = document.createTextNode("product is very Good");
  let text2 = document.createTextNode("product is very Good");
  head.appendChild(text1);
  para.appendChild(text2);

  myElement.appendChild(head);
  myElement.appendChild(para);

  document.body.appendChild(myElement);
}
//
