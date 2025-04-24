// body and card

let body = document.querySelector("body");

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.margin = "0";

// crete a div to hod all elements

// create card
let card = document.createElement("div");
card.style.maxWidth = "90%";
card.style.width = "600px";
card.style.height = "900px";
card.style.minHeight = "300px";
card.style.boxShadow = "0px 0px 10px 0px";
card.style.backgroundColor = "#003300";
card.style.padding = "20px";
card.style.boxSizing = "border-box";
card.style.margin = "20px auto";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.alignItems = "center";
card.style.gap = "10px";
card.style.overflow = "hidden";

let input = document.createElement("input");
input.className = "input";
input.type = "text";
input.placeholder = "Enter something...";
input.style.width = "100%";
input.style.height = "30px";
input.style.border = "none";
input.style.borderRadius = "5px";
card.appendChild(input);
body.appendChild(card);
document.getElementsByClassName("input");
// create add button

let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "add new task";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.style.padding = "10px";
btn.style.maxwidth = "50%";
btn.style.width = "200px";
btn.style.borderRadius = "5px";
btn.style.color = "green";
btn.style.fontWeight = "bold";
btn.style.fontSize = "16px";
card.appendChild(btn);

// container for holding task

let container = document.createElement("div");
container.id = "listContainer";
container.style.height = "900px";
container.style.width = "500px";
container.style.marginTop = "5rem";
container.style.borderRight = "0.3px solid green";
container.style.borderLeft = "0.3px solid green";

card.appendChild(container);

// create ul lists...append to container

// write Function

document.querySelector("#btn").addEventListener("click", function () {
  let container = document.querySelector("#listContainer");
  let inputValue = document.querySelector("input").value.trim();

  if (inputValue === "") {
    return;
  }
  // ,,create an id for each task
  let id = container.children.length + 1;
  let para = document.createElement("p");
  para.style.color = "white";
  para.style.display = "flex";
  para.style.justifyContent = "space-between";
  para.id = `para-${id}`;
  container.appendChild(para);
  para.style.borderBottom = "0.3px solid green";

  // create two span, one for image and one for para

  let paratext = document.createElement("span");
  paratext.textContent = `${id}. ${inputValue}`;

  // creating images span

  let image = document.createElement("span");
  image.innerHTML = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="#75FB4C"
    style="cursor: pointer;"
  >
    <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
  </svg>

`;


let radio = document.createElement('span');
radio.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C">
  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
</svg>`;

  image.addEventListener("click", function () {
    para.remove();
  });

  para.appendChild(paratext);
  para.appendChild(image);
 

  // remove list item

  para.addEventListener("click", function () {
    para.style.textDecoration = "line-through";
  });
});

// create delete image and append to para.
