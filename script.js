var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randomButton = document.createElement("button");
randomButton.appendChild(document.createTextNode("Randomize"));
body.appendChild(randomButton);
randomButton.addEventListener("click", randomize);

function randomize() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
}

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
