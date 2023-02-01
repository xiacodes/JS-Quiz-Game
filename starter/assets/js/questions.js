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
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");
var answers = [answer1, answer2, answer3, answer4];

// Loop and add the li elements to the ol element
for (let index = 0; index < answers.length; index++) {
	choicesList.appendChild(index);
}

function viewCurrentQuestion() {
	questionTitle.textContent = questions[currentQuestion].title;
}
