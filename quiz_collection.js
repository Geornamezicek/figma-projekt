document.addEventListener("DOMContentLoaded", function () {
    const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";

    quizzes.forEach((quiz, index) => {
        const button = document.createElement("button");
        button.textContent = `Quiz #${index + 1}`;
        button.onclick = function () {
            localStorage.setItem("currentQuiz", JSON.stringify(quiz));
            window.location.href = "take_quiz.html";
        };
        grid.appendChild(button);
    });
});