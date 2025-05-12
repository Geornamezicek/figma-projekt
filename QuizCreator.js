function saveQuizToLocalStorage() {
    const question = document.getElementById('question').value;
    const selectedOption = document.querySelector('input[name="option"]:checked');

    const quizItem = {
        question: question,
        correctAnswer: selectedOption.value
    };

    localStorage.setItem('quiz', JSON.stringify(quizItem));
    alert("Ulozeno!")
}