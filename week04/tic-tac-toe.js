const board = document.querySelector(".container");
const divBoard = document.querySelector(".square");
const resetButton = document.getElementById("reset");
const player1 = "X";
const player2 = "O";
let player = player1;
function addPiece(e) {
	console.log(e.target);
	e.target.innerHTML = player;
	if (player === player1) player = player2;
	else player = player1;
}

function reset() {
	const divBoard = document.querySelector(".container");
	for (let i = 0; i < divBoard.children.length; i++) {
		divBoard.children[i].innerText = "";
	}
	const children = Array.from(divBoard.children);
	const empty = children.filter(function (child) {
		return child.innerText == "X" || child.innerText == "O";
	});
	console.log(empty);
}
board.addEventListener("click", addPiece);
divBoard.addEventListener("click", addPiece);
reset.addEventListener("click", reset);
