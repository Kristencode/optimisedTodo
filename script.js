let body = document.querySelector("body");
document.documentElement.style.height = "100%";
body.style.height = "100%";
body.style.margin = "0";
body.style.fontFamily = "Arial, sans-serif";
body.style.backgroundColor = "#1c1c1e";
body.style.color = "#d1d1d1";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.minHeight = "100vh";

// nav bar here
let nav = document.createElement("nav");
nav.style.backgroundColor = "#2c2c2e";
nav.style.padding = "20px";
nav.style.textAlign = "center";
nav.style.boxShadow = "0px 2px 8px rgba(0,0,0,0.4)";

let title = document.createElement("h1");
title.innerText = "My To-Do App";
title.style.color = "#75FB4C";
title.style.margin = "0";
nav.appendChild(title);
body.appendChild(nav);

//the conatiner holding the card
let main = document.createElement("main");
main.style.flex = "1";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "flex-start";
main.style.padding = "30px";
main.style.boxSizing = "border-box";
body.appendChild(main);

// FOOTER card and style
let footer = document.createElement("footer");
footer.style.backgroundColor = "#2c2c2e";
footer.style.textAlign = "center";
footer.style.padding = "15px";
footer.style.color = "#75FB4C";
let footerText = document.createElement("p");
footerText.innerText = "©blockfuseLabs. 2025 Kristen Haruna.";
footerText.style.margin = "0";
footer.appendChild(footerText);
body.appendChild(footer);

// CARD is holding the todo section/logic
let card = document.createElement("div");
card.style.maxWidth = "90%";
card.style.width = "600px";
card.style.height = "auto";
card.style.minHeight = "300px";
card.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
card.style.backgroundColor = "#2c2c2e";
card.style.padding = "20px";
card.style.boxSizing = "border-box";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.alignItems = "center";
card.style.gap = "10px";
card.style.overflow = "hidden";
main.appendChild(card);

// input/styles
let input = document.createElement("input");
input.className = "input";
input.type = "text";
input.placeholder = "Enter something...";
input.style.width = "100%";
input.style.height = "40px";
input.style.border = "1px solid #444";
input.style.backgroundColor = "#1c1c1e";
input.style.color = "#d1d1d1";
input.style.padding = "0 10px";
input.style.borderRadius = "5px";
input.style.fontSize = "16px";
card.appendChild(input);

// BUTTON/styles
let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Add New Task";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.style.padding = "10px";
btn.style.width = "200px";
btn.style.borderRadius = "5px";
btn.style.backgroundColor = "#75FB4C";
btn.style.color = "#1c1c1e";
btn.style.fontWeight = "bold";
btn.style.fontSize = "16px";
card.appendChild(btn);

// LIST CONTAINER
let container = document.createElement("div");
container.id = "listContainer";
container.style.height = "auto";
container.style.maxWidth = "100%";
container.style.width = "100%";
container.style.marginTop = "2rem";
container.style.borderTop = "1px solid #444";
card.appendChild(container);

// logic starts here
btn.addEventListener("click", function () {
  let inputValue = input.value.trim();
  if (inputValue === "") return;

  input.value = "";
  let id = container.children.length + 1;

  let paraDiv = document.createElement("div");
  paraDiv.style.color = "#d1d1d1";
  paraDiv.style.display = "flex";
  paraDiv.style.alignItems = "center";
  paraDiv.style.borderBottom = "1px solid #444";
  paraDiv.style.padding = "10px 0";
  container.appendChild(paraDiv);

  let number = document.createElement("span");
  number.textContent = `${id}. `;
  number.style.marginRight = "10px";
  paraDiv.appendChild(number);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";
  checkbox.style.accentColor = "#75FB4C";
  paraDiv.appendChild(checkbox);

  let para = document.createElement("div");
  para.style.display = "flex";
  para.style.alignItems = "center";
  para.style.justifyContent = "space-between";
  para.style.width = "100%";
  paraDiv.appendChild(para);

  let paratext = document.createElement("span");
  paratext.textContent = inputValue;
  para.appendChild(paratext);

  let image = document.createElement("span");
  image.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C" style="cursor: pointer;">
      <path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/>
    </svg>
  `;
  image.addEventListener("click", function () {
    paraDiv.remove();
  });
  para.appendChild(image);

  checkbox.addEventListener("change", function () {
    paratext.style.textDecoration = checkbox.checked ? "line-through" : "none";
    paratext.style.opacity = checkbox.checked ? "0.6" : "1";
  });
});

// just testing animations
card.animate(
  [
    { opacity: 0, transform: "translateY(20px)" },
    { opacity: 1, transform: "translateY(0)" },
  ],
  {
    duration: 300,
    easing: "ease",
    fill: "forwards",
  }
);
