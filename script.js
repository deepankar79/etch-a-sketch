"use strict";

let el, uchoice;
const btns = document.querySelectorAll(".butt");
const fele = document.getElementById("main");
const pickColor = document.getElementById("colorInput");
const color = document.querySelector(".grid");

//function to create grid
const createGrid = function (size) {
  for (let i = 0; i < size * size; i++) {
    el = document.createElement("div");
    color.style.gridTemplateColumns = `repeat(${size}, minmax(0,1fr))`;
    color.style.gridTemplateRows = `repeat(${size}, minmax(0,1fr))`;
    el.classList.add(`gridR--${i + 1}`, "grid-items");
    color.appendChild(el);
  }
};

//function returns a random color

const randomColor = function () {
  let hue, saturation, lightness;
  hue = Math.floor(Math.random() * 361);
  saturation = Math.floor(Math.random() * (101 - 10) + 10);
  lightness = Math.floor(Math.random() * (81 - 20) + 20);
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

let darkness = 90;
const prgDrk = function () {
  if (darkness < 0) darkness = 90;
  let hue, saturation, lightness;
  hue = Math.floor(Math.random() * 361);
  saturation = Math.floor(Math.random() * (101 - 10) + 10);
  lightness = darkness;
  darkness -= 10;

  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

createGrid(16);

//function for new grid input by user(resetGrid button)
const resetGrid = function () {
  let choice;
  do {
    choice = prompt("Enter new size of Grid (Not more than 100)");
  } while (choice > 100);
  if (choice === null || choice === "") return;

  while (color.firstChild) {
    color.removeChild(color.lastChild);
  }
  createGrid(choice);
};

//clears grid
const resetBoard = function () {
  const colr = document.querySelectorAll(".grid-items");
  colr.forEach((c1) => (c1.style.backgroundColor = "white"));
};
const userInput = function (choice) {
  if (choice === "Reset Grid") {
    resetGrid();
    return;
  } else if (choice === "Reset board") {
    resetBoard();
    return;
  }
  color.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-items")) {
      switch (choice) {
        case "RGB":
          e.target.style.backgroundColor = randomColor();
          break;
        case "Eraser":
          e.target.style.backgroundColor = "white";
          break;
        case "Pick color":
          e.target.style.backgroundColor = pickColor.value;
          break;
        case "Darkening":
          e.target.style.backgroundColor = prgDrk();
          break;
      }
    }
  });
};

btns.forEach((button) =>
  button.addEventListener("click", function (e) {
    uchoice = e.target.innerText;
    userInput(uchoice);
  })
);
