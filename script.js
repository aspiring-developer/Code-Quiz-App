// Referencing/calling all related DOM elements
var startButtonEl = document.getElementById("startButton");
var nextButtonEl = document.getElementById("nextButton");
var questionWrapperEl = document.getElementById("questionWrapper");
var questionFieldEl = document.getElementById("questionField");
var answerButtonsEl = document.getElementById("answerButtons");
var resetButtonEl = document.getElementById("resetButton");
var eachButtonEl = document.getElementById("eachButton");
var timerCounterEl = document.querySelector(".timerCounter");
var scoreCounterEl = document.getElementById("scoreCounter");

var randomizedQuestions;
var displayingQuestionIndex = 0;
var score = 0; // user's score initialized to 0.
var timerDisplay = 75; // timer set to 75 seconds total.
var TIMER;

startButtonEl.addEventListener("click", startQuiz);
nextButtonEl.addEventListener('click', () => { 
displayingQuestionIndex++;
initializeAnotherQuestion();
// if(allQuestions.question.length >= 5) {
//   nextButtonEl.style.display = 'none';
//   startButtonEl.style.display = 'none';
// }
})

function startQuiz(){  
console.log("Try!");
randomizedQuestions = allQuestions.sort(() => Math.random() * 1);
displayingQuestionIndex = 0;
initializeAnotherQuestion();
// resetButtonEl.style.display = 'none';
eachButtonEl.style.display = 'none';
TIMER = setInterval(updateCounter, 1000);
  }
  
function initializeAnotherQuestion() {
resetQuiz();
displayQuestion(randomizedQuestions[displayingQuestionIndex]);
}

function displayQuestion(question) {
  questionFieldEl.innerText = question.question;
  question.answerChoices.forEach(answer => {
    var button = document.createElement('button');
    button.innerText = answer.text;
 button.classList.add('eachButton');
  if(answer.rightAnswer) {
  button.dataset.rightAnswer = answer.rightAnswer;
  }
 button.addEventListener("click", chooseAnswer);
 answerButtonsEl.appendChild(button);
 
  })
}

resetButtonEl.addEventListener("click", resetQuiz);
function resetQuiz() {
  clearStatusClass(document.body);
//nextButtonEl.style.display = 'none';
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild)
  }
  
}

function chooseAnswer(e) {
  var targetedButton = e.target;
  var rightAnswer = targetedButton.dataset.rightAnswer
setStatusClass(document.body, rightAnswer);
Array.from(answerButtonsEl.children).forEach(button => {
  setStatusClass(button, button.dataset.rightAnswer)
})
if (randomizedQuestions.length > displayingQuestionIndex + 1) {
  // nextButtonEl.style.display = 'none';
} else {
  resetButtonEl.style.display = 'block';
}
}

function setStatusClass(element, rightAnswer) {
  clearStatusClass(element)
 
}
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function updateCounter() {
 
  timerCounterEl.textContent = timerDisplay;
  if(timerDisplay <= 0){
    clearInterval(TIMER);
   resetQuiz();
}else{
  timerDisplay--;
}
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Setting questions array - five questions
var allQuestions = [
  {question: "What is JavaScript?",
  answerChoices: [
    {text: "Scripting language", rightAnswer: true},
    {text: "Web browser", rightAnswer: false},
    {text: "Document editor", rightAnswer: false},
    {text: "Graphic design tool", rightAnswer: false}

  ]
}, 

 { question:  "Which is server-side JavaScript?",
  answerChoices: [
    {text: "React", rightAnswer: false},
    {text: "Node.js", rightAnswer: true},
    {text: "php.net", rightAnswer: false},
    {text: "MongoDB", rightAnswer: false}

  ]
},

{ question: "A favorite Chrome dev tool to log code's output.",
  answerChoices: [
    {text: "Application", rightAnswer: false},
    {text: "Source", rightAnswer: false},
    {text: "Console", rightAnswer: true},
    {text: "Elements", rightAnswer: false}

  ]
},

{ question: "A keyword to declare a Javascript 'variable'.",
  answerChoices: [
    {text: "array", rightAnswer: false},
    {text: "method", rightAnswer: false},
    {text: "object", rightAnswer: false},
    {text: "let", rightAnswer: true}

  ]
},

{ question:  "A popular Javascript library.", 
  answerChoices: [
    {text: "jQuery", rightAnswer: true},
    {text: "Python", rightAnswer: false},
    {text: "Swift", rightAnswer: false},
    {text: "Java", rightAnswer: false}

  ]
},









]


 






