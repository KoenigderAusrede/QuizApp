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

let currentquestion = 0
let answers = questions[currentquestion].answers
let right_answer = questions[currentquestion].right_answer

function init() {
    document.getElementById('numberofquestions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    let question = questions[currentquestion];
    document.getElementById('questiontext').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = answers[0]
    document.getElementById('answer_2').innerHTML = answers[1]
    document.getElementById('answer_3').innerHTML = answers[2]
    document.getElementById('answer_4').innerHTML = answers[3]
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
    } else {
        document.getElementById(elementId).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
    }
    document.getElementById('next-button').disabled = false;
}