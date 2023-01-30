// Question arrays
var question1 = ["Writing JavaScript code", "Creating a website layout and design", "Storing website data", "Processing user input"];
var question2 = ["By using the <script> tag in the <head> section", "By using the <style> tag in the <body> section", "Storing website data", "By using the <jscript> tag in the <header> section"];
var question3 = ["#example { }", ".example { }", "example { }", "<example> { }"];
var question4 = ["function alertFunction() { alert('Hello!'); }", "function displayAlert() { alertBox(Hello!''); }", "function showMessage() { alert('Hello!''); }", "function popUp() { alert('Hello!''); }"];
var question5 = ["body {color: yellow;}", "body {background-color: yellow;}", "page {color: yellow;}", "page {background: yellow;}"];

function addToOrderedList(array) {
	for (var i = 0; i < array.length; i++) {
		var li = document.createElement("li");
		li.setAttribute("class", "answers");
		li.textContent = array[i];
		choicesList.appendChild(li);
	}
}

addToOrderedList(question1);

// Correct Answers Detector~!
var q1Answer = "Creating a website layout and design";
var q2Answer = "By using the <script> tag in the <head> section";
var q3Answer = "#example { }";
var q4Answer = "function alertFunction() { alert('Hello!'); }";
var q5Answer = "body {background-color: yellow;}";

const listItems = document.querySelectorAll(".answers");
for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", function () {
		if (this.textContent === q1Answer || this.textContent === q2Answer || this.textContent === q3Answer || this.textContent === q4Answer || this.textContent === q5Answer) {
			h3.textContent = "Correct!";
		} else {
			h3.textContent = "Wrong!";
		}
		feedbackContainer.classList.remove("hide");
		feedbackContainer.appendChild(h3);
		setTimeout(function () {
			for (let index = 0; index < listItems.length; index++) {
				choicesList.removeChild(listItems[index]);
			}
			feedbackContainer.classList.add("hide");
		}, 3000);
	});
}

function render() {}
