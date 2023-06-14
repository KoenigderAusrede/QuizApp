let questions = [
    {
        "question": "Welche Zutat wird traditionell für die Herstellung von Pesto Genovese verwendet?",
        "answers": [
            "Basilikum",
            "Spinat",
            "Rucola",
            "Petersilie"
        ],
        "right_answer": "Basilikum"
    },
    {
        "question": "Welche Temperatur sollte ein perfekt medium gebratenes Steak haben?",
        "answers": [
            "54°C",
            "60°C",
            "66°C",
            "72°C"
        ],
        "right_answer": "60°C"
    },
    {
        "question": "Welches Gewürz ist eine Hauptzutat im indischen Curry?",
        "answers": [
            "Kurkuma",
            "Koriander",
            "Kreuzkümmel",
            "Kardamom"
        ],
        "right_answer": "Kreuzkümmel"
    },
    {
        "question": "Welche Zutat ist ein wichtiger Bestandteil von Guacamole?",
        "answers": [
            "Avocado",
            "Tomate",
            "Zwiebel",
            "Käse"
        ],
        "right_answer": "Avocado"
    },
    {
        "question": "Welche Art von Reis wird traditionell für Sushi verwendet?",
        "answers": [
            "Basmati",
            "Jasmin",
            "Sushi-Reis",
            "Wildreis"
        ],
        "right_answer": "Sushi-Reis"
    },
    {
        "question": "Welches Lebensmittel ist die Hauptzutat in Hummus?",
        "answers": [
            "Kichererbsen",
            "Linsen",
            "Bohnen",
            "Erbsen"
        ],
        "right_answer": "Kichererbsen"
    },
    {
        "question": "Welche Zutat wird verwendet, um Brot zu lockern und aufgehen zu lassen?",
        "answers": [
            "Hefe",
            "Salz",
            "Zucker",
            "Backpulver"
        ],
        "right_answer": "Hefe"
    }
];

let currentquestion = 0;
let answers = questions[currentquestion].answers;
let right_answer = questions[currentquestion].right_answer;
let correct_answers = 0

let audio_success = new Audio('audio/success.mp3')
let audio_fail = new Audio('audio/fail.mp3')


function init() {
    document.getElementById('numberofquestions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    if (currentquestion >= questions.length) {
        endQuiz()
    } else {
    let question = questions[currentquestion];
    answers = question.answers;
    right_answer = question.right_answer;

    let percent = currentquestion / questions.length
    percent = Math.round(percent * 100)
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;


    document.getElementById('questiontext').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = answers[0]
    document.getElementById('answer_2').innerHTML = answers[1]
    document.getElementById('answer_3').innerHTML = answers[2]
    document.getElementById('answer_4').innerHTML = answers[3]
    }
};

function findElementIdByContent(content) {
    var elements = document.getElementsByTagName("*");

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent === content) {
            return elements[i].id;
        }
    }
    return null; // Kein Passendes Element
}


function answer(element) {
    var elementId = findElementIdByContent(element)
    let idOfRightAnswer = findElementIdByContent(right_answer);

    if (element == right_answer) {
        document.getElementById(elementId).parentNode.classList.add('bg-success');
        correct_answers++;
        audio_success.play();
    } else {
        document.getElementById(elementId).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
        audio_fail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentquestion++;
    document.getElementById('currentquestion').innerHTML = currentquestion + 1;
    showQuestion();
    
    let success = document.getElementsByClassName("bg-success");
    while (success.length > 0) {
        success[0].classList.remove("bg-success");
    }
    let danger = document.getElementsByClassName("bg-danger");
    while (danger.length > 0) {
        danger[0].classList.remove("bg-danger");
    }
    if (currentquestion > questions.length) {
    document.getElementById('next-button').disabled = true;
    }
}

function endQuiz() {
    document.getElementById('main').innerHTML = /*html*/ `
    <img src="img/endcard.jpeg" alt="">
    <div class="progress" role="progressbar">
                <div class="progress-bar" id="progress-bar" style="width: 100%">100%</div>
              </div>
    <div class="endcard">Herzlichen Glückwunsch, Du hast das Quiz beendet</div>
    <span class="center" style="white-space: pre-wrap;">Du hast <b>${correct_answers}</b> von <b>7</b> Fragen richtig beantwortet</span>
    <button onclick=restart() class="btn btn-secondary">Quiz neu Starten</button>
    `
}


function restart() {
    currentquestion = 0;
    document.getElementById('main').innerHTML = /*html*/ `
    <div class="card quiz-card">
            <img src="img/quiz.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" id="questiontext">Frage</h5>
                <div class="card quiz-answer-card mb-2">
                    <div class="card-body" id="answer_1" onclick="answer(this.innerHTML)">
                        Antwort
                    </div>
                  </div>
                  <div class="card quiz-answer-card mb-2">
                    <div class="card-body" id="answer_2" onclick="answer(this.innerHTML)">
                        Antwort
                    </div>
                  </div>
                  <div class="card quiz-answer-card mb-2">
                    <div class="card-body" id="answer_3" onclick="answer(this.innerHTML)">
                        Antwort
                    </div>
                  </div>
                  <div class="card quiz-answer-card mb-2">
                    <div class="card-body" id="answer_4" onclick="answer(this.innerHTML)">
                        Antwort
                    </div>
                  </div>

              <div class="question-footer">
              <span><b id="currentquestion">1</b> von <b id="numberofquestions">7</b> Fragen</span>
              <button onclick="nextQuestion()" href="#" class="btn btn-primary" id="next-button" disabled>Nächste Frage</button>
            </div>
    `
    document.getElementById('numberofquestions').innerHTML = questions.length;
    showQuestion();
}