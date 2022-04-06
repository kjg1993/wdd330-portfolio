"use stric";

const question = document.getElementById("question");
const choices = document.getElementsByClassName("choice-text");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
// console.log(choices);

let currentQuestion = {};
let aceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [];

const url =
	"https://opentdb.com/api.php?amount=12&category=9&difficulty=easy&type=multiple";

//Fetch request

// fetch("./data/questions.json")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((loadQuestion) => {
// 		console.log(loadQuestion);
// 		questions = loadQuestion;
// 		startGame();
// 	});

fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((loadedQuestions) => {
		console.table(loadedQuestions.results);
		questions = loadedQuestions.results.map((loadedQuestion) => {
			const formattedQuestions = {
				question: loadedQuestion.question,
			};

			const answerChoices = [...loadedQuestion.incorrect_answers];
			formattedQuestions.answer = Math.floor(Math.random() * 12) + 1;
			answerChoices.splice(
				formattedQuestions.answer - 1,
				0,
				loadedQuestion.correct_answer
			);

			answerChoices.forEach((choice, index) => {
				formattedQuestions["choice" + (index + 1)] = choice;
			});
			return formattedQuestions;
		});

		startGame();
	});
// .catch((err) => {
// 	console.log(err);
// });

// CONTANTS

const CORREC_BONUS = 10;
const MAX_QUESTIONS = 12;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestion = [...questions];
	// console.log(availableQuestion);
	getNewQuestion();
};

getNewQuestion = () => {
	if (availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
		//go to the end page
		localStorage.setItem("mostRecentScore", score);
		return window.location.assign("end.html");
	}

	questionCounter++;
	progressText.innerText = `Questions ${questionCounter}/${MAX_QUESTIONS}`;

	//update the progress bar
	progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

	const questionIndex = Math.floor(Math.random() * availableQuestion.length);
	currentQuestion = availableQuestion[questionIndex];
	question.innerText = currentQuestion.question;

	Array.from(choices).forEach((choice) => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number];
	});

	availableQuestion.splice(questionIndex, 1);
	aceptingAnswer = true;
};

Array.from(choices).forEach((choice) => {
	choice.addEventListener("click", (e) => {
		// console.log(e.target);
		if (!aceptingAnswer) return;
		aceptingAnswer = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];

		// const classToApply = "incorrect	";
		// if (selectedAnswer === currentQuestion.answer) {
		// 	classToApply = "correct";
		// }

		const classToApply =
			selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

		if (classToApply == "correct") {
			incrementScore(CORREC_BONUS);
		}

		selectedChoice.parentElement.classList.add(classToApply);

		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 1000);
	});
});

incrementScore = (num) => {
	score += num;
	scoreText.innerText = score;
};

// startGame();
