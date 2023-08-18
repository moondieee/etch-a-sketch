const grid = document.querySelector(".grid");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", changeColor);
    div.style.border = "1px solid black";
    grid.appendChild(div);
    function changeColor(e) {
      e.target.style.backgroundColor = "black";
    }
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const slider = document.querySelector("#slider");
const value = document.querySelector(".value");

value.textContent = slider.value;
slider.addEventListener("input", checkValue);
function checkValue() {
  value.textContent = slider.value;
}

slider.addEventListener("input", function () {
  let value = document.getElementById("slider").value;
  removeAllChildNodes(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`
  );
  for (let i = 0; i < value * value; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.style.border = "1px solid black";
    div.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  const gridChildren = Array.from(grid.children);
  gridChildren.forEach((element) => {
    element.style.backgroundColor = "#fff";
  });
});
createGrid();

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const rgb = document.querySelector(".rgb");
rgb.addEventListener("click", function () {
  const gridChildren = Array.from(grid.children);
  gridChildren.forEach((element) => {
    element.addEventListener("mouseover", changeRGB);
    function changeRGB(e) {
      e.target.style.backgroundColor = getRandomColor();
    }
  });
});

const black = document.querySelector(".black");
black.addEventListener("click", function () {
  const gridChildren = Array.from(grid.children);
  gridChildren.forEach((element) => {
    element.addEventListener("mouseover", changeRGB);
    function changeRGB(e) {
      e.target.style.backgroundColor = "black";
    }
  });
});
