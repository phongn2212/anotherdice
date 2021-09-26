function random() {
    var n = Math.floor(Math.random() * 6 + 1);
    return n;
}

function changeImg1(number) {
    if (number == 1)
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    if (number == 2)
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    if (number == 3)
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    if (number == 4)
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    if (number == 5)
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    if (number == 6)
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

function changeImg2(number) {

    if (number == 1)
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    if (number == 2)
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    if (number == 3)
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    if (number == 4)
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    if (number == 5)
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    if (number == 6)
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

var number1 = random();

changeImg1(number1);

var number2 = random();
changeImg2(number2);

// change h1

if (number1 > number2)
    document.querySelector("h1").textContent = "Player 1 win!";
else document.querySelector("h1").textContent = "Player 2 win";

if (number1 == number2)
    document.querySelector("h1").textContent = "DRAW";