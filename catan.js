var playerOne {
	name = "Player 1"
	score = null
	cards = ""
}

var playerTwo {
	name = "Player 2"
	score = null
	cards = ""
}

var playerThree {
	name = "Player 3"
	score = null
	cards = ""
}

var playerFour {
	name = "Player 4"
	score = null
	cards = ""
}

function diceRoll(){
	return Math.ceil(Math.random()*6)
}

function diceFunction(){
	let D1 = diceRoll();
	let D2 = diceRoll();
	
  document.getElementById('D1').src = "die"+D1+".PNG";
  document.getElementById('D2').src = "die"+D2+".PNG";
  let roll = D1 + D2
}
