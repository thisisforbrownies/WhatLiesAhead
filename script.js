function checkAnswer() {
	var answer = document.getElementById("answer").value;
	if (answer.toLowerCase() == "the future" ||answer.toLowerCase() == "future") {
		window.location.href = "correct.html";
	} else {
		window.location.href = "wrong.html";
	}
}
