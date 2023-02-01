var playerInfo;

subBtn.addEventListener("click", function (event) {
	event.preventDefault();
	// The information stored in variables
	score = time.textContent;
	var user = userInput.value;

	// The array to store it
	playerInfo = {
		score: score,
		user: user,
	};

	// Putting it in the local storage
	localStorage.setItem("highScores", JSON.stringify(playerInfo));
});
