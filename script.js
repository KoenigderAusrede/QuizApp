let questions = [
    {
      "question": "Welche Zutat wird traditionell für die Herstellung von Pesto Genovese verwendet?",
      "answers": [
        "Basilikum",
        "Spinat",
        "Rucola",
        "Petersilie"
      ],
      "right_answer": 1
    },
    {
      "question": "Welche Temperatur sollte ein perfekt medium gebratenes Steak haben?",
      "answers": [
        "54°C",
        "60°C",
        "66°C",
        "72°C"
      ],
      "right_answer": 2
    },
    {
      "question": "Welches Gewürz ist eine Hauptzutat im indischen Curry?",
      "answers": [
        "Kurkuma",
        "Koriander",
        "Kreuzkümmel",
        "Kardamom"
      ],
      "right_answer": 3
    },
    {
      "question": "Welche Zutat ist ein wichtiger Bestandteil von Guacamole?",
      "answers": [
        "Avocado",
        "Tomate",
        "Zwiebel",
        "Käse"
      ],
      "right_answer": 1
    },
    {
      "question": "Welche Art von Reis wird traditionell für Sushi verwendet?",
      "answers": [
        "Basmati",
        "Jasmin",
        "Sushi-Reis",
        "Wildreis"
      ],
      "right_answer": 3
    },
    {
      "question": "Welches Lebensmittel ist die Hauptzutat in Hummus?",
      "answers": [
        "Kichererbsen",
        "Linsen",
        "Bohnen",
        "Erbsen"
      ],
      "right_answer": 1
    },
    {
      "question": "Welche Zutat wird verwendet, um Brot zu lockern und aufgehen zu lassen?",
      "answers": [
        "Hefe",
        "Salz",
        "Zucker",
        "Backpulver"
      ],
      "right_answer": 1
    }
  ];

let currentquestion = 0

function init() {
    document.getElementById('numberofquestions').innerHTML = questions.length;
    showQuestion();
};

function showQuestion() {
    let question = questions[currentquestion];
    let answers = questions[currentquestion].answers
    document.getElementById('questiontext').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = answers[0]
    document.getElementById('answer_2').innerHTML = answers[1]
    document.getElementById('answer_3').innerHTML = answers[2]
    document.getElementById('answer_4').innerHTML = answers[3]
};