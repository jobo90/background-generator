let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("body");
let random = document.querySelector(".random");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

random.addEventListener("click", function() {
    // console.log(randomColor());
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
})

function randomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}