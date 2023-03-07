var randomNumber1, randomNumber2;
/*
This function sets up the dice game by requesting the two player names


*/
function setUp() {
  let p1 = prompt("Please player 1 enter name");
  document.querySelector("#p1").innerHTML = p1;
  let p2 = prompt("please player 2 enter name");
  console.log(p2);
  document.getElementById("p2").innerHTML = p2;
  getFirst();
  getSecond();
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = p1 + "🚩 wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = p2 + " wins!🚩";
  } else {
    document.querySelector("h1").textContent = "Draw Try again!";
  }
}

//Get first dice image generated randomly
function getFirst() {
  var n = Math.random();
  randomNumber1 = 1 + Math.floor(n * 6);
  var link1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", link1);
}


//Get second dice image generated randomly
function getSecond() {
  var k = Math.random();
  randomNumber2 = 1 + Math.floor(k * 6);
  var link2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", link2);
}