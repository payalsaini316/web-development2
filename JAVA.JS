// 1. Quiz Questions Array
let quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "How many days are there in a week?", answer: "7" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 3?", answer: "8" },
    { question: "What gas do plants release during photosynthesis?", answer: "oxygen" }
];

// 2. Function to Run the Quiz
function runQuiz() {
    let score = 0; // 3. Score Initialization

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // 5. Prompt User for Input
        let userAnswer = prompt(quizQuestions[i].question);

        // If user pressed Cancel
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // 6. Normalize the Input
        userAnswer = userAnswer.toLowerCase().trim();

        // 7. Check the Answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            // 8. Provide Immediate Feedback
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    // 9. Display Final Score
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}

// 10. Run the Quiz in the Browser Console
runQuiz();