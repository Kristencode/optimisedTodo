// body and card

let body = document.querySelector("body");
document.documentElement.style.height = "100%";
document.body.style.height = "100%";
document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.flexDirection = " row-reverse";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

// crete a div to hod all elements

// create card
let card = document.createElement("div");
card.style.maxWidth = "90%";
card.style.width = "600px";
card.style.height = "auto";
card.style.minHeight = "300px";
card.style.boxShadow = "0px 0px 10px 0px";
card.style.backgroundColor = "#003300";
card.style.padding = "20px";
card.style.boxSizing = "border-box";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.alignItems = "center";
card.style.gap = "10px";
card.style.overflow = "hidden";

let Donetask = document.createElement("div");
Donetask.style.maxWidth = "90%";
Donetask.style.width = "600px";
Donetask.style.height = "auto";
Donetask.style.minHeight = "100px";
Donetask.style.boxShadow = "0px 0px 10px 0px";
Donetask.style.boxSizing = "border-box";
Donetask.style.display = "none";
Donetask.style.flexDirection = "column";
// Donetask.style.alignItems = "center";
Donetask.style.border = "1px solid green";
Donetask.style.gap = "10px";
Donetask.style.overflow = "hidden";
Donetask.style.position = "fixed";
Donetask.style.top = "10px";
Donetask.style.right = "20px";
Donetask.style.margin = "0";
body.appendChild(Donetask);

// create a h1 forr done task
let TaskTitle = document.createElement("h2");
TaskTitle.innerText = "Completed Task";
TaskTitle.style.color = "green";
TaskTitle.style.borderRadius = "2px";
// TaskTitle.style.padding = "5px";
TaskTitle.style.marginTop = "0";
TaskTitle.style.boxShadow = "0px 0px 10px 0px white";

Donetask.append(TaskTitle);

// created and appended input UI
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
container.style.height = "auto";
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
  let date = new Date().toLocaleString();

  if (inputValue === "") {
    return;
  }

  // ,,create an id for each task
  let id = container.children.length + 1;
  let paraDiv = document.createElement("div");
  paraDiv.style.color = "white";
  paraDiv.style.display = "flex";
  paraDiv.style.alignItems = "center";
  container.appendChild(paraDiv);
  paraDiv.style.borderBottom = "0.3px solid green";
  paraDiv.textContent = `${id}.`;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.accentColor = "green";

  paraDiv.appendChild(checkbox);

  //  create a div and append the div to the pa

  let para = document.createElement("div");
  para.style.display = "flex";
  para.style.alignItems = "center";
  para.style.justifyContent = "space-between";
  para.style.width = "478px";
  paraDiv.appendChild(para);
  paraDiv.style.height = "50px";

  // para.appendChild(checkbox);

  // create two span, one for image and one for para

  let paratext = document.createElement("span");
  paratext.textContent = ` ${inputValue}`;
  para.appendChild(paratext);

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

  // function to delete..the image carries the delete
  image.addEventListener("click", function () {
    paraDiv.remove();
  });

  para.appendChild(image);

  // here  used the CHECKED property and the CHANGE event listener
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      paratext.style.textDecoration = "line-through";
    } else {
      paratext.style.textDecoration = "none";
    }
  });
});

// create delete image and append to para.

card.animate(
  [
    { opacity: 0, transform: "translateY(20px)" },
    { opacity: 1, transform: "translateY(0)" },
  ],
  {
    duration: 100,
    easing: "ease",
    fill: "forwards",
  }
);
