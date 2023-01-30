// Start Screen variables
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");

// Questions Screen variables
var questionsScreen = document.getElementById("questions");
var choicesList = document.getElementById("choices-list");
var questionTitle = document.getElementById("question-title");
var questionRN = 0;

// Feedback Screen
var feedbackContainer = document.getElementById("feedback");
var h3 = document.createElement("h3");

//Scoring
var score = 0;

// Timer
var time = document.getElementById("time");
var counter = 60;

// The start button + timer countdown
startBtn.addEventListener("click", function () {
	// Hide the start screen and start the quiz
	startScreen.classList.add("hide");
	questionsScreen.classList.remove("hide");

	//Counting down the timer
	var timer = setInterval(() => {
		time.textContent = counter;
		counter--;
		//I set it to -1 so the user can see the '0' at the end~!
		if (counter === -1) {
			clearInterval(timer);
		}
	}, 1000);
});
