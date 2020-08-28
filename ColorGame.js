var numberOfSquares = 3;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var ColorDisplay = document.querySelector("#ColorDisplay");
var message = document.getElementById("message");
var h1 = document.getElementsByTagName("h1")[0];
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

var instructions = document.querySelector(".instructions");


var help = document.getElementById("help");
help.addEventListener("click", function() {
	instructions.classList.toggle("visible");
});


function CreateModes() {
	//mode buttons event listeners
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			modeBtns[2].classList.remove("selected");

			this.classList.add("selected");

			if (this.textContent === "Easy") {
				numberOfSquares = 3;
			} else if (this.textContent === "Medium") {
				numberOfSquares = 6;
			} else {
				numberOfSquares = 9;
			}

			reset();
		});
	}	
}

function CreateSquares() {
	//set up square listeners
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of the clicked square
			var clickedColor = this.style.backgroundColor;
			//compare to the picked color
			if (clickedColor === pickedColor) {
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeAllColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				message.textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
		});
	}	
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change color display to match picked color
	ColorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colors of square
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

}

function initial() {
	CreateModes();
	CreateSquares();
	reset();
}

initial();


// easyBtn.addEventListener("click", function() {
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	ColorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	ColorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function() {
	reset();
});

function generateRandomColors(num) {
	//make array
	var array = [];

	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		array.push(randomColor());
	}
	//return array
	return array;
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//"rbg( , , )"
	return "rgb("+ r +", " + g + ", " + b + ")";
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeAllColors(color) {
	//loop through each square
	//change each color to the correct color picked
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


