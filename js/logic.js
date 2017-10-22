var numSquares = 6;
var colors = arrayGenerator(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colorRandomizer();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = arrayGenerator(numSquares);
    pickedColor = colorRandomizer();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = arrayGenerator(numSquares);
    pickedColor = colorRandomizer();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
});

resetBtn.addEventListener("click", function() {
    resetBtn.textContent = "New Colors";
    colors = arrayGenerator(numSquares);
    pickedColor = colorRandomizer();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to div.squares
    squares[i].style.backgroundColor = colors[i];

    //add click events to all div.squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function colorRandomizer() {
    var random = Math.floor((Math.random() * colors.length));
    return colors[random];
}

function arrayGenerator(numColors) {
    var arr = [];
    for (var i = 0; i < numColors; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var rcr = Math.floor(Math.random() * 265);
    var rcg = Math.floor(Math.random() * 265);
    var rcb = Math.floor(Math.random() * 265);
    return "rgb(" + rcr + ", " + rcg + ", " + rcb + ")";
}