let currentSlideIndex = 0;
let quizData = [];
let lives = 3;

document.addEventListener("DOMContentLoaded", function () {
    const savedQuiz = localStorage.getItem("currentQuiz");

    if (!savedQuiz) {
        alert("Zadny quiz nebyl vybran!");
        window.location.href = "quiz_collection.html";
        return;
    }

    quizData = JSON.parse(savedQuiz);

    if (!Array.isArray(quizData)) {
        quizData = [quizData];
    }

    if (quizData.length === 0) {
        alert("Quiz je prazdny.");
        return;
    }

    showSlide(0);
});

function updateLives() {
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart, index) => heart.style.opacity = index < lives ? "1" : "0.3");

    if (lives <= 0) {
        document.getElementById("gameOver").style.display = "block";
        document.querySelector(".question").style.display = "none";
        document.querySelector(".options").style.display = "none";
        document.querySelector(".navigation").style.display = "none";
    }
}

function showSlide(index) {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const slideNumber = document.getElementById("slide-number");

    optionsContainer.innerHTML = "";

    slideNumber.textContent = `Question ${index + 1} of ${quizData.length}`;

    questionText.textContent = quizData[index].question;

    const options = ["A", "B", "C", "D"];

    options.forEach((option) => {
        const button = document.createElement("button");
        const answerText = quizData[index].options[option] || "";

        button.textContent = `${option}: ${answerText}`;
        button.addEventListener("click", function () {
            if (option === quizData[index].correctAnswer) {
                button.classList.add("correct");
            } else {
                button.classList.add("wrong");
                lives--;
                updateLives();
            }
        });

        optionsContainer.appendChild(button);
    });

    document.getElementById("prev-button").disabled = index === 0;
    document.getElementById("next-button").disabled = index === quizData.length - 1;
}

function nextSlide() {
    if (currentSlideIndex < quizData.length - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    }
}