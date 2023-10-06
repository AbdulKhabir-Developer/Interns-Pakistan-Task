
document.addEventListener("DOMContentLoaded", function () {
    var answers = [];

    // Function to record answers
    function recordAnswer(questionId, answerId, nextQuestionId) {
        answers[questionId - 1] = answerId; // Store the answer

        // Hide the current question and show the next question
        document.getElementById("question" + questionId).style.display = "none";
        if (nextQuestionId === "result") {
            // Redirect to the result page when all questions are answered
            window.location.href = "result.html";
        } else {
            document.getElementById("question" + nextQuestionId).style.display = "block";
        }
    }

    // Set up button click handlers
    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("startQuestion").style.display = "none";
        document.getElementById("question1").style.display = "block";
    });

    var answerButtons = document.getElementsByClassName("answerButton");
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", function () {
            var questionId = this.getAttribute("data-question-id");
            var answerId = this.getAttribute("data-answer-id");
            var nextQuestionId = this.getAttribute("data-next-question-id");
            recordAnswer(questionId, answerId, nextQuestionId);
        });
    }
});
