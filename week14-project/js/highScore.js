// "use stric";

const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

window.onload = function score() {
	highScoreList.innerHTML = highScores
		.map((score) => {
			return `<li class="high-score">${score.name} - ${score.score}</li>`;
		})
		.join("");
};
