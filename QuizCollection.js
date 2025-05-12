document.addEventListener("DOMContentLoaded", function () {
    const quizData = JSON.parse(localStorage.getItem('quiz'));
    console.log(quizData.question)
    document.getElementById("item1").textContent = quizData.question;
});