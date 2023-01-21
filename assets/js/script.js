// add start button - timer starts and questions are displayed.
//back to back questions
//reduce time everytime there is a wrong answer. 
// game ends when the timer runs out or all questions are answered.
//save initial and score and display on score board.
//button to restart game.
//keep score displayed. 
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