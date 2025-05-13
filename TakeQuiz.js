document.addEventListener('DOMContentLoaded', function () {
    const quizData = JSON.parse(localStorage.getItem('quiz'));

    if (!quizData) {
        alert("Žádný kvíz nebyl nalezen.");
        return;
    }

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    questionText.textContent = quizData.question;

    const options = ['A', 'B', 'C', 'D'];

    options.forEach(option => {
        const button = document.createElement('button');
        const answerText = quizData.options[option] || ''; // pokud chybí text, zobrazí se prázdně

        button.textContent = `${option}: ${answerText}`;
        button.addEventListener('click', function () {
            if (option === quizData.correctAnswer) button.classList.add('correct');
            else button.classList.add('wrong');
        });

        optionsContainer.appendChild(button);
    });
});