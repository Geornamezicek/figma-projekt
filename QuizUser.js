function saveQuizToLocalStorage() {
    const question = document.getElementById('question').value;
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!question || !selectedOption) {
        alert("Zadej otázku a vyber správnou odpověď.");
        return;
    }

    const optionsText = {
        A: document.getElementById('textA').value,
        B: document.getElementById('textB').value,
        C: document.getElementById('textC').value,
        D: document.getElementById('textD').value
    };

    const quizItem = {
        question: question,
        options: optionsText,
        correctAnswer: selectedOption.value
    };

    localStorage.setItem('quiz', JSON.stringify(quizItem));
    alert("Uloženo!");
}

