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

var startButtonEl = document.querySelector("#start-quiz");
var gameContainerEl = document.querySelector(".game-container");
var quizButtonEl = document.querySelector(".btn");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var highScoreEl = document.querySelector("#high-score");

//add event listener to start button to send user to game page
startButtonEl.addEventListener("click", startGame)
function startGame() {
  window.location.href = "index.html";
  var startTime = setInterval(function(){
    if (timeStart <= -1 || x === 5) {
      clearInterval(startTime);
      endGame();
    } else {
    timerEl.textContent = timeStart;
  }
  //timeStart---;
//}, 666);
firstQuestion();
}
