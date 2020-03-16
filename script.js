// Referencing/calling all related DOM elements
var timerCounterEl = document.querySelector(".timerCounter");
var questionFieldEl = document.getElementById("questionField");
var answerFieldEl = document.getElementById("answerField"); 
var startButtonEl = document.getElementById("startButton");
var nextButtonOneEl = document.getElementById("nextButtonOne");
var nextButtonTwoEl = document.getElementById("nextButtonTwo");
var nextButtonThreeEl = document.getElementById("nextButtonThree");
var nextButtonFourEl = document.getElementById("nextButtonFour");
var nextButtonFiveEl = document.getElementById("nextButtonFive"); 
var answerButtonsEl = document.getElementById("answerButton");
var answerChoiceA = document.getElementById("answerChoiceOneA");
var answerChoiceB = document.getElementById("answerChoiceOneB");
var answerChoiceC = document.getElementById("answerChoiceOneC");
var answerChoiceD = document.getElementById("answerChoiceOneD");
var scoreCounterEl = document.getElementById("scoreCounter");

// Setting questions array - five questions
var allQuestions = ["What is JavaScript?", 
                    "Which is server-side JavaScript?",
                    "A favorite Chrome dev tool to log code's output.",
                    "A keyword to declare a 'variable' that is mostly similar to var.",
                    "A popular Javascript library."
                  ]
 
// Setting array for answer choices
var answerChoiceOne = [
"Scripting language", "MongoDB", "Source",  "array", "jQuery"
]
var answerChoiceTwo = [
"Document editor", "Node.js", "Elements", "method", "Python"
]
var answerChoiceThree = [
"Graphic design tool", "React", "Console", "object", "Swift"
]
var answerChoiceFour = [
"Web browser", "php.net", "Application", "let", "Java"
];
// Setting right and wrong answer choices
var rightAnswer = ["Right", "Right", "Right", "Right", "Right"];
var wrongAnswer = ["Wrong", "Wrong", "Wrong", "Wrong", "Wrong"];
var actualScore = 0; // user's score initialized to 0.
var counterDisplay = 75; // timer set to 75 seconds total.
var TIMER;
// adding event listener to all buttons
startButtonEl.addEventListener("click", startQuiz); // quiz starts
nextButtonOneEl.addEventListener("click", newButtonOne); // takes to question 2
nextButtonTwoEl.addEventListener("click", newButtonTwo); // takes to question 3
nextButtonThreeEl.addEventListener("click", newButtonThree); // takes to question 4
nextButtonFourEl.addEventListener("click", newButtonFour); // takes to question 5
nextButtonFiveEl.addEventListener("click", newButtonFive); // takes to reset area
nextButtonOneEl.style.display = ("none"); // initially hiding "Next" button-1

function startQuiz(){  
questionFieldEl.textContent = allQuestions[0];
answerChoiceA.textContent = answerChoiceOne[0];
answerChoiceB.textContent = answerChoiceTwo[0];
answerChoiceC.textContent = answerChoiceThree[0];
answerChoiceD.textContent = answerChoiceFour[0];
answerButtonsEl.style.display = ("block");
startButtonEl.style.display = ("none");
TIMER = setInterval(updateCounter, 1000);

nextButtonOneEl.style.display = ("block"); // displaying "Next" button-1

 }

 // Click handlers for question 1
function questionOneRightChoice() {
  answerFieldEl.textContent = rightAnswer[0];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  actualScore++;
  scoreCounterEl.textContent = actualScore;
  // if(answerChoiceA[0]) {
  // updateScore(totalScore);
  // }
   };

 function questionOneWrongChoice() {
  answerFieldEl.textContent = wrongAnswer[0];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  
};
function newButtonOne() {
  questionFieldEl.textContent = allQuestions[1];
  answerChoiceA.textContent = answerChoiceOne[1];
answerChoiceB.textContent = answerChoiceTwo[1];
answerChoiceC.textContent = answerChoiceThree[1];
answerChoiceD.textContent = answerChoiceFour[1];
answerFieldEl.textContent = "";
nextButtonOneEl.style.display = ("none"); // hiding "Next" button-1
  nextButtonTwoEl.style.display = ("block");  // displaying "Next" button-2
};

// Click handlers for question 2
function questionTwoRightChoice() {
  answerFieldEl.textContent = rightAnswer[1];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
  
};
function questionTwoWrongChoice() {
  answerFieldEl.textContent = wrongAnswer[1];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
 

};
function newButtonTwo() {
  questionFieldEl.textContent = allQuestions[2];
  answerChoiceA.textContent = answerChoiceOne[2];
answerChoiceB.textContent = answerChoiceTwo[2];
answerChoiceC.textContent = answerChoiceThree[2];
answerChoiceD.textContent = answerChoiceFour[2];
answerFieldEl.textContent = "";
startButtonEl.style.display = ("none");
 nextButtonTwoEl.style.display = ("none"); // hiding "Next" button-2
 nextButtonThreeEl.style.display = ("block"); // displaying "Next" button-3

};

// Click handlers for question 3
function questionThreeRightChoice() {
  answerFieldEl.textContent = rightAnswer[2];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
 
}
function questionThreeWrongChoice() {
  answerFieldEl.textContent = wrongAnswer[2];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
 

}
function newButtonThree() {
  questionFieldEl.textContent = allQuestions[3];
  answerChoiceA.textContent = answerChoiceOne[3];
answerChoiceB.textContent = answerChoiceTwo[3];
answerChoiceC.textContent = answerChoiceThree[3];
answerChoiceD.textContent = answerChoiceFour[3];
answerFieldEl.textContent = "";
startButtonEl.style.display = ("none");
nextButtonThreeEl.style.display = ("none"); // hiding "Next" button-3
nextButtonFourEl.style.display = ("block"); // displaying "Next" button-4

}
// Click handlers for question 4
function questionFourRightChoice() {
  answerFieldEl.textContent = rightAnswer[3];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
 
  

}
function questionFourWrongChoice() {
  answerFieldEl.textContent = wrongAnswer[3];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
 
}
function newButtonFour() {
  questionFieldEl.textContent = allQuestions[4];
  answerChoiceA.textContent = answerChoiceOne[4];
answerChoiceB.textContent = answerChoiceTwo[4];
answerChoiceC.textContent = answerChoiceThree[4];
answerChoiceD.textContent = answerChoiceFour[4];
answerFieldEl.textContent = "";
startButtonEl.style.display = ("none");
nextButtonFourEl.style.display = ("none"); // hiding "Next" button-4
nextButtonFiveEl.style.display = ("block"); // displaying "Next" button-5
}

// Click handlers for question 5
function questionFiveRightChoice() {
  answerFieldEl.textContent = rightAnswer[4];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
  
}
function questionFiveWrongChoice() {
  answerFieldEl.textContent = wrongAnswer[4];
  answerChoiceA.textContent ="";
  answerChoiceB.textContent ="";
  answerChoiceC.textContent ="";
  answerChoiceD.textContent ="";
  scoreCounterEl.textContent = actualScore++;
 }

 function newButtonFive() {
  questionFieldEl.textContent = "";
  answerChoiceA.textContent = "";
answerChoiceB.textContent = "";
answerChoiceC.textContent = "";
answerChoiceD.textContent = "";
answerFieldEl.textContent = "";
startButtonEl.style.display = ("none");
nextButtonFourEl.style.display = ("none"); // hiding "Next" button-4
nextButtonFiveEl.style.display = ("none"); // hiding "Next" button-5
// resetButtonEl.style.display = ("block");
resetQuiz();
}

function resetQuiz() {
  
location.reload();        

}

// update timer counter
function updateCounter() {
 
    timerCounterEl.textContent = counterDisplay;
    if(counterDisplay <= 0){
      clearInterval(TIMER);
     resetQuiz();
}else{
  counterDisplay--;
  }
  }
  function updateScore(totalScore) {
    var scorePoint = Math.floor(Math.random() * allQuestions.length);
    scoreCounterEl.textContent = scorePoint;
    actualScore++;
    }
//  function updateScore {
//    if()
//   scoreCounterEl.innerHTML = actualScore;
//  }

 






