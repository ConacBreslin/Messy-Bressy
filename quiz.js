

let currentQuestionNumber = 0;
let score = 0;
let availableQuesions = [];
let maxQuestions = 10;
let phobia = document.getElementById("phobia");
let optionA = document.getElementById("A");
let optionB = document.getElementById("B");
let optionC = document.getElementById("C");
let optionD = document.getElementById("D");



// Code to pick new questions
function renderQuestion (){
    currentQuestionNumber ++;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(questionIndex);
    currentQuestion = availableQuestions[questionIndex];
    console.log(currentQuestion);
    phobia.innerText = currentQuestion.phobia;
    
      }


//code to run all steps of quiz
function startQuiz(){
    console.log("Quiz started");
    score = 0;
    console.log(score);
    currentQuestionNumber = 0;
    console.log(currentQuestionNumber);
    availableQuestions = [...questions];
    console.log(availableQuestions);
    renderQuestion()
    
}




 


startQuiz();
