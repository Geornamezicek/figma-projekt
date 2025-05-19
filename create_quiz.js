let slides = [];

function createNewSlide() {
    const mainDiv = document.querySelector(".main");
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide active";
    slideDiv.innerHTML = `
                <div class="slide-number">Slide ${slides.length + 1}</div>
                <label for="question${
        slides.length
    }"><strong>question:</strong></label>
                <input type="text" id="question${
        slides.length
    }" name="question" placeholder="enter your question">
                <div class="options">
                  <label>
                    <input type="radio" name="option${slides.length}" value="A"> A
                    <input type="text" id="textA${
        slides.length
    }" placeholder="text for answer A">
                  </label><br>
                  <label>
                    <input type="radio" name="option${slides.length}" value="B"> B
                    <input type="text" id="textB${
        slides.length
    }" placeholder="text for answer B">
                  </label><br>
                  <label>
                    <input type="radio" name="option${slides.length}" value="C"> C
                    <input type="text" id="textC${
        slides.length
    }" placeholder="text for answer C">
                  </label><br>
                  <label>
                    <input type="radio" name="option${slides.length}" value="D"> D
                    <input type="text" id="textD${
        slides.length
    }" placeholder="text for answer D">
                  </label>
                </div>
              `;
    mainDiv.appendChild(slideDiv);
    slides.push(slideDiv);
}

function saveQuizToLocalStorage() {
    const quizItems = [];

    let slideFailed = false;

    slides.forEach((slide, index) => {
        const question = document.getElementById(`question${index}`).value;
        const selectedOption = document.querySelector(`input[name="option${index}"]:checked`);

        if (!question || !selectedOption) {
            alert(`Prosim vypln vse ve slidu ${index + 1}`);
            slideFailed = true;
            return;
        }

        const optionsText = {
            A: document.getElementById(`textA${index}`).value,
            B: document.getElementById(`textB${index}`).value,
            C: document.getElementById(`textC${index}`).value,
            D: document.getElementById(`textD${index}`).value,
        };

        const quizItem = {
            question: question,
            options: optionsText,
            correctAnswer: selectedOption.value,
        };

        quizItems.push(quizItem);
    });

    if (slideFailed) return;

    const existingQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    existingQuizzes.push(quizItems);
    localStorage.setItem("quizzes", JSON.stringify(existingQuizzes));
    alert("Quiz uspesne ulozen!");
    window.location.href = "quiz_collection.html";
}