// The question objects
var questions = [
	{
		title: "What is CSS used for?",
		answers: ["Writing JavaScript code", "Creating a website layout and design", "Storing website data", "Processing user input"],
		correct: "Creating a website layout and design",
	},
	{
		title: "How do you select an element with the ID 'example' in CSS?",
		answers: ["<example> { }", ".example { }", "example { }", "#example { }"],
		correct: "#example { }",
	},
	{
		title: "How do you add JavaScript to an HTML file?",
		answers: ["Storing website data", "By using the <style> tag in the <body> section", "By using the <script> tag in the <head> section", "By using the <jscript> tag in the <header> section"],
		correct: "By using the <script> tag in the <head> section",
	},
	{
		title: "How do you make a function in JavaScript that displays an alert?",
		answers: ["function alertFunction() { alert('Hello!'); }", "function displayAlert() { alertBox(Hello!''); }", "function showMessage() { alert('Hello!''); }", "function popUp() { alert('Hello!''); }"],
		correct: "function alertFunction() { alert('Hello!'); }",
	},
	{
		title: "How do you set the background color of a page to yellow in CSS?",
		answers: ["body {color: yellow;}", "body {background-color: yellow;}", "page {color: yellow;}", "page {background: yellow;}"],
		correct: "body {background-color: yellow;}",
	},
];

// Set the current number of the question from the 'questions' array
var currentQuestion = 0;

//The list elements for each choice answers
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer1 = document.createElement("button");
var answer4 = document.createElement("button");
var answers = [answer1, answer2, answer3, answer4];

// Loop and add the li elements to the ol element
for (let index = 0; index < answers.length; index++) {
	choicesList.appendChild(answers[index]);
}

function viewCurrentQuestion() {
	// The title of the new question
	questionTitle.textContent = questions[currentQuestion].title;

	// Inserting the question answer choices
	for (let i = 0; i < answers.length; i++) {
		answers[i].textContent = `${[i + 1]}. ` + questions[currentQuestion].answers[i];
	}
}

viewCurrentQuestion();

choicesList.addEventListener("click", function (e) {
	var userAnswer = e.target.textContent;
	var correct = questions[currentQuestion].correct;

	if (userAnswer == correct) {
		//Showing the feedback section
		h3.textContent = "Correct!";
		feedbackContainer.classList.remove("hide");
		feedbackContainer.appendChild(h3);
	} else if (userAnswer !== correct) {
		h3.textContent = "Wrong!";
		feedbackContainer.classList.remove("hide");
		feedbackContainer.appendChild(h3);
		counter -= 5;
	}

	if (currentQuestion > questions.length) {
		endTheGame();
	} else {
		//After 3 seconds, delete everything anf hide the feedback containers
		setTimeout(function () {
			currentQuestion++;
			feedbackContainer.classList.add("hide");
			viewCurrentQuestion();
		}, 2500);
	}
});
