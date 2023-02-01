// Start Screen variables
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");

// Questions Screen variables
var questionsScreen = document.getElementById("questions");
var choicesList = document.getElementById("choices");
var questionTitle = document.getElementById("question-title");
var questionRN = 0;

// Feedback Screen
var feedbackContainer = document.getElementById("feedback");
var h3 = document.createElement("h3");

// The End Screen
var endScreen = document.getElementById("end-screen");
var subBtn = document.getElementById("submit");
var userInput = document.getElementById("initials");
var finalScore = document.getElementById("final-score");

//Scoring
var score = 0;

// Timer
var time = document.getElementById("time");
var counter = 60;
var timer;

// The start button + timer countdown
startBtn.addEventListener("click", function () {
	// Hide the start screen and start the quiz
	startScreen.classList.add("hide");
	questionsScreen.classList.remove("hide");

	//Counting down the timer
	timer = setInterval(() => {
		time.textContent = counter;
		counter--;
		//I set it to -1 so the user can see the '0' at the end~!
		if (counter === -1) {
			clearInterval(timer);
		}
	}, 1000);

	timer;
});
