// Tech Challenge - Game Logic

// Game Questions
const questions = [
    {
        question: "What does CPU stand for?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Utility",
            "Central Program Utility",
            "Computer Processing User"
        ],
        correct: 0
    },
    {
        question: "Which device connects multiple computers within a local network?",
        answers: [
            "Printer",
            "Network Switch",
            "Monitor",
            "Keyboard"
        ],
        correct: 1
    },
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Trainer Marking Language",
            "High Text Machine Language",
            "HyperText Markup Language",
            "Hyper Transfer Main Language"
        ],
        correct: 2
    },
    {
        question: "Which of these is an example of a strong password?",
        answers: [
            "password123",
            "12345678",
            "john2004",
            "T!ger7#Moon92"
        ],
        correct: 3
    },
    {
        question: "What is the main purpose of a firewall?",
        answers: [
            "To increase screen brightness",
            "To monitor and control network traffic",
            "To store files",
            "To speed up a keyboard"
        ],
        correct: 1
    },
    {
        question: "Which programming language is commonly used to make web pages interactive?",
        answers: [
            "JavaScript",
            "HTML",
            "SQL",
            "XML"
        ],
        correct: 0
    },
    {
        question: "What does RAM do?",
        answers: [
            "Permanently stores files",
            "Connects to the internet",
            "Temporarily stores data being used by the computer",
            "Displays images"
        ],
        correct: 2
    },
    {
        question: "What does HTTPS help provide?",
        answers: [
            "Faster computer performance",
            "A larger hard drive",
            "Automatic software updates",
            "Encrypted communication between a browser and a website"
        ],
        correct: 3
    },
    {
        question: "Which IP address is commonly used as a private IPv4 address?",
        answers: [
            "8.8.8.8",
            "192.168.1.10",
            "1.1.1.1",
            "200.200.200.200"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of antivirus software?",
        answers: [
            "To detect and help remove malicious software",
            "To improve monitor resolution",
            "To increase internet speed",
            "To create websites"
        ],
        correct: 0
    }
];

// Game Variables
let currentQuestion = 0;
let score = 0;
let answered = false;

// HTML Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const questionCounter = document.getElementById("question-counter");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");

// Start Game
function startGame() {
    currentQuestion = 0;
    score = 0;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    answered = false;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreElement.textContent = `Score: ${score}`;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    feedbackElement.textContent = "";
    feedbackElement.className = "";

    nextButton.classList.add("hidden");

    answerButtons.innerHTML = "";

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer-button");

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answerButtons.appendChild(button);
    });
}

// Check Selected Answer
function selectAnswer(selectedIndex, selectedButton) {
    if (answered) {
        return;
    }

    answered = true;

    const correctIndex = questions[currentQuestion].correct;
    const buttons = answerButtons.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === correctIndex) {
        score += 10;

        feedbackElement.textContent = "Correct! Great job! +10 points";
        feedbackElement.className = "correct-feedback";
    } else {
        selectedButton.classList.add("incorrect");

        feedbackElement.textContent =
            "Incorrect! The correct answer is highlighted above.";

        feedbackElement.className = "incorrect-feedback";
    }

    scoreElement.textContent = `Score: ${score}`;

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "See Results"
            : "Next Question";

    nextButton.classList.remove("hidden");
}

// Move to Next Question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Display Final Results
function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    progressBar.style.width = "100%";

    finalScore.textContent = `Your Score: ${score} / 100`;

    if (score === 100) {
        resultMessage.textContent =
            "Perfect score! You're a technology expert!";
    } else if (score >= 70) {
        resultMessage.textContent =
            "Great job! You have a strong understanding of technology!";
    } else if (score >= 40) {
        resultMessage.textContent =
            "Not bad! Keep learning and improving your IT knowledge!";
    } else {
        resultMessage.textContent =
            "Keep practicing! You'll get better with every attempt!";
    }
}

// Button Events
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", startGame);
