var playerInfo;
console.log(score);

subBtn.addEventListener("click", function (event) {
	event.preventDefault();
	// The information stored in variables

	var user = userInput.value;
	var userScore = score;

	// The object to store it
	playerInfo = [userScore, user];

	// Putting it in the local storage
	localStorage.setItem("playerInfo", JSON.stringify(playerInfo));
});
