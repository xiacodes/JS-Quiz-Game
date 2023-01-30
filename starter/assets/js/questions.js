// The question objects
var questions = [
	{
		question: "What is CSS used for?",
		answers: ["Writing JavaScript code", "Creating a website layout and design", "Storing website data", "Processing user input"],
		correct: "Creating a website layout and design",
	},
	{
		question: "How do you select an element with the ID 'example' in CSS?",
		answers: ["<example> { }", ".example { }", "example { }", "#example { }"],
		correct: "#example { }",
	},
	{
		question: "How do you add JavaScript to an HTML file?",
		answers: ["Storing website data", "By using the <style> tag in the <body> section", "By using the <script> tag in the <head> section", "By using the <jscript> tag in the <header> section"],
		correct: "By using the <script> tag in the <head> section",
	},
	{
		question: "How do you make a function in JavaScript that displays an alert?",
		answers: ["function alertFunction() { alert('Hello!'); }", "function displayAlert() { alertBox(Hello!''); }", "function showMessage() { alert('Hello!''); }", "function popUp() { alert('Hello!''); }"],
		correct: "function alertFunction() { alert('Hello!'); }",
	},
	{
		question: "How do you set the background color of a page to yellow in CSS?",
		answers: ["body {color: yellow;}", "body {background-color: yellow;}", "page {color: yellow;}", "page {background: yellow;}"],
		correct: "body {background-color: yellow;}",
	},
];

function makingQuestion(object) {
	for (var i = 0; i < object.length; i++) {
		var li = document.createElement("li");
		li.setAttribute("class", "answers");
		li.textContent = object[i];
		choicesList.appendChild(li);
	}
}

makingQuestion(questions);

const listItems = document.querySelectorAll("li");

// Deletes the list
function removeTheList() {
	for (let j = 0; j < listItems.length; j++) {
		choicesList.removeChild(listItems[j]);
	}
}

// Shows the question + choices on the screen
function renderQuestion(questionNum) {
	var question = questions[questionNum];
	questionTitle.textContent = question.question;
	removeTheList();
	makingQuestion(question.answers);
}

var playing = true;

while (playing == true) {}

renderQuestion(questionRN);

for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", function () {
		//If any of the correct answers are clicked
		if (listItems[i].textContent === questions[questionRN].correct) {
			h3.textContent = "Correct!";
		} else {
			h3.textContent = "Wrong!";
			counter -= 9;
		}
		questionRN++;
		//Showing the feedback section
		feedbackContainer.classList.remove("hide");
		feedbackContainer.appendChild(h3);

		//After 3 seconds, delete everything anf hide the feedback containers
		setTimeout(function () {
			for (let index = 0; index < listItems.length; index++) {
				choicesList.removeChild(listItems[index]);
			}
			feedbackContainer.classList.add("hide");
			questionTitle.textContent = "";
		}, 2000);
	});
}

function renderQuestionsAndAnswers(title, array) {
	for (let k = 0; k < array.length; k++) {}
}
