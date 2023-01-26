const css = document.querySelector("h3");
const FirstColor = document.querySelector(".color1");
const SecondColor = document.querySelector(".color2");
const body = document.getElementById("gradient");



function setGradient() {
    body.style.background = "linear-gradient(to right," + FirstColor.value + "," + SecondColor.value + ")";

    css.textContent = body.style.background + ";";
}



FirstColor.addEventListener("input", setGradient);

SecondColor.addEventListener("input", setGradient);




