"use strict";

// ELEMENT/S
const faqQuestions = document.querySelectorAll(".faq__question");

// FUNCTION/S
function handleQuestionClick(clickedQuestion) {
	// -- Loop through the questions again
	faqQuestions.forEach((item) => {
		// -- Remove ".show" from all question except the one that was clicked
		if (item !== clickedQuestion) {
			item.classList.remove("show");
		}
	});
	// -- Toggle ".show" class to clicked question
	clickedQuestion.classList.toggle("show");
}

// EVENT LISTENER/S
// -- Loop through faqQuestions array
faqQuestions.forEach((question) => {
	// -- Add a click event listener to each question
	question.addEventListener("click", () => {
		// -- Call handleQuestionClick function using the clicked question as an argument
		handleQuestionClick(question);
	});
});
