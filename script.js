var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector ("body");
var random = document.querySelector("button");

function randomColorGenerator() {
	return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	}


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";

}


function createRandomBtn() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Random"));
	body.appendChild(btn);
	btn.onclick = randomColor;
}

function randomColor() {
	var newColor = randomColorGenerator();
	var newColor2 = randomColorGenerator();
	console.log(newColor);
	console.log(newColor2);
	color1.value = newColor;
	color2.value = newColor2;
	setGradient()
	
}

setGradient();
createRandomBtn();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
