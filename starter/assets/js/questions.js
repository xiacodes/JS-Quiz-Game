// Question arrays
var question1 = ["Writing JavaScript code", "Creating a website layout and design", "Storing website data", "Processing user input"];

function addToOrderedList(array) {
	for (var i = 0; i < array.length; i++) {
		var li = document.createElement("li");
		li.textContent = array[i];
		choicesList.appendChild(li);
	}
}

addToOrderedList(question1);
