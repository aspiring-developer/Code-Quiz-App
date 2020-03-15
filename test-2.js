var timerCounterEl = document.querySelector(".timerCounter");
var questionFieldEl = document.getElementById("questionField");
var answerFieldEl = document.getElementById("answerOptions");
var startButtonEl = document.getElementById("startButton");
var scoreCounterEl = document.querySelector(".scoreCounter");
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");

var allQuestions = [   {
    questionToAsk: "What is JavaScript?",
    answerChoiceA: "* " + "Document editor",
      answerChoiceB: "* " + "Graphic design tool",
      answerChoiceC: "* " + "Web browser",
      answerChoiceD: "* " + "Scripting language",
      rightAnswer: "D"
    },
     
  {
    questionToAsk: "Which one of these uses server-side JavaScript?",
      answerChoiceA: "* " +  "Node.js",
      answerChoiceB:  "* " +  "MongoDB",
      answerChoiceC: "* " +  "React",
      answerChoiceD: "* " + "php.net",
      rightAnswer: "A"
    },
    

  {
    questionToAsk: "Which dev tool feature you mostly use to check your code in Chrome browser?",
      answerChoiceA: "* " +  "Source",
      answerChoiceB:  "* " +  "Elements",
      answerChoiceC: "* " +  "Application",
      answerChoiceD: "* " + "Console",
      rightAnswer: "D"
  },

  {
    questionToAsk: "What one of these keyword is used to declare a 'variable' in Javascript?",
      answerChoiceA: "* " +  "array",
      answerChoiceB:  "* " +  "method",
      answerChoiceC: "* " +  "object",
      answerChoiceD: "* " + "let",
      rightAnswer: "D"
    },
  
  {
    questionToAsk: "What would you do if you are struggling to code Javascript?",
      answerChoiceA: "* " +  "Ask the instructor",
      answerChoiceB:  "* " +  "Search online",
      answerChoiceC: "* " +  "Use tutor help",
      answerChoiceD: "* " + "All of the above",
      rightAnswer: "D"
    },
  ];

var lastQuestion = allQuestions.length -1;
var currentQuestion = 0;
var counterDisplay = 15;
var TIMER;
var actualScore = 0;


  // processing the question
function processQuestion() {
var question = allQuestions[currentQuestion];
questionFieldEl.textContent = question.questionToAsk;
answerChoiceA.textContent = question.answerChoiceA;
answerChoiceB.textContent = question.answerChoiceB;
answerChoiceC.textContent = question.answerChoiceC;
answerChoiceD.textContent = question.answerChoiceD;
timerCounterEl.textContent = counterDisplay;
  }

startButtonEl.addEventListener("click", startQuiz);

function startQuiz(){  
processQuestion();
TIMER = setInterval(updateCounter, 1000);
currentQuestion++;
 }

// updating the counter
function updateCounter() {
  console.log("this is being called.");
    counterDisplay--;
    timerCounterEl.textContent = counterDisplay;
      if(counterDisplay <= 0){
         processQuestion();
    clearInterval(TIMER);
    updateScore();

  }

}

function checkAnswer(answer) {
if(answer === allQuestions[processQuestion].rightAnswer) {
  actualScore++;
  scoreCounterEl.textContent = actualScore;
}
if(processQuestion < lastQuestion){
  processQuestion++;
  processQuestion();


}else{
  clearInterval(TIMER);
  updateScore();
}
}

 function updateScore() {
 var scorePoint = Math.floor(Math.random() * allQuestions.length);
 scoreCounterEl.textContent = scorePoint;
 }

