// add start button - timer starts and questions are displayed.
//back to back questions
//reduce time everytime there is a wrong answer. 
// game ends when the timer runs out or all questions are answered.
//save initial and score and display on score board.
//button to restart game.
//store score in local storage.
//keep score displayed. document.write (initial and score)

var listEl;
var buttonEl;
var timeStart = 75;
var questionsAnswer;
var questionsScore = 0;
var leaderBoard = [];
var x = 0;

var startButton = document.querySelector("#start-quiz");
var quizContainer = document.querySelector("#quiz-box");
var quizButton = document.querySelector(".btn");
var timer = document.querySelector("#timer");
var quizHeader = document.querySelector("#quiz-header");
var quizText = document.querySelector("#quiz-text");
var highScore = document.querySelector("#high-score");

// List of questions, choices, and answers
var questions = [
    {
      title: "Which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    },
    {
      title: "What are the two basic groups of data types in JavaScript?",
      choices: [
        "Primitive and attribute",
        "Primitive and reference types",
        "Reference types and attribute",
        "None of the above"
      ],
      answer: "Primitive and reference types"
    },
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "Boolean operators that can be used in JavaScript include:",
      choices: [
        "'And' Operator &&",
        "'Or' Operator ||",
        "'Not' Operator !",
        "All the above"
      ],
      answer: "All the above"
    },
    {
      title:
        "Which one of these is not among the three different types of errors in JavaScript?",
      choices: [
        "Animation time errors",
        "Load time errors",
        "Run time errors",
        "Logical Errors"
      ],
      answer: "Animation time errors"
    },
    {
      title: "What is the data type of variables in JavaScript?",
      choices: [
        "Object data types",
        "Function data type",
        "None of the above",
        "All of the above"
      ],
      answer: "Object data types"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    },
    {
      title: "What is the type of Pop up boxes available in JavaScript?:",
      choices: ["Alert", "Confirm", "Prompt", "All the above"],
      answer: "All the above"
    }
  ];
  

// add event listener for start button to open game page
quizButton.addEventListener("click", startGame)
function startGame() {
    window.location.href = "index.html";
}


