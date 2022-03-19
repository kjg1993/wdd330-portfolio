"use stric";

const question = document.getElementById("question");
const choices = document.getElementsByClassName("choice-text");
// console.log(choices);

let currentQuestion = {};
let aceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
	{
		question: "Inside ",
	},
];
