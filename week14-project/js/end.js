"use stric";

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
console.log(highScore);

// localStorage.setItem("highScore", JSON.stringify([]));
// console.log(JSON.parse(localStorage.getItem("highScore")));

username.addEventListener("keyup", () => {
	saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
	e.preventDefault();

	const score = {
		score: Math.floor(Math.random() * 100),
		name: username.value,
	};
	highScore.push(score);
	highScore.sort((a, b) => b.score - a.score);
	highScore.splice(5);

	localStorage.setItem("highScores", JSON.stringify(highScore));
	window.location.assign("./index.html");
};
