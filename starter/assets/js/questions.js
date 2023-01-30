// Question arrays
var question1 = ["Writing JavaScript code", "Creating a website layout and design", "Storing website data", "Processing user input"]; // Answer = 1
var question2 = ["By using the <script> tag in the <head> section", "By using the <style> tag in the <body> section", "Storing website data", "By using the <jscript> tag in the <header> section"]; // Answer = 0
var question3 = ["#example { }", ".example { }", "example { }", "<example> { }"]; // Answer = 0
var question4 = ["function alertFunction() { alert('Hello!'); }", "function displayAlert() { alertBox(Hello!''); }", "function showMessage() { alert('Hello!''); }", "function popUp() { alert('Hello!''); }"];
// Answer = 0
var question5 = ["body {color: yellow;}", "body {background-color: yellow;}", "page {color: yellow;}", "page {background: yellow;}"]; // Answer = 1

function addToOrderedList(array) {
	for (var i = 0; i < array.length; i++) {
		var li = document.createElement("li");
		li.setAttribute("class", "answers");
		li.textContent = array[i];
		choicesList.appendChild(li);
	}
}

addToOrderedList(question1);

var q1Answer = "Creating a website layout and design";
var q2Answer = "By using the <script> tag in the <head> section";
var q3Answer = "#example { }";
var q4Answer = "function alertFunction() { alert('Hello!'); }";
var q5Answer = "body {background-color: yellow;}";

const listItems = document.querySelectorAll(".answers");
for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", function () {
		if (this.textContent === q1Answer || this.textContent === q2Answer || this.textContent === q3Answer || this.textContent === q4Answer || this.textContent === q5Answer) {
			alert("Well done!");
		}
	});
}
