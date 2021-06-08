//get peron to selection number of questions wanted
let displayQuestionNumbers = getElementById("displayQuestionNumbers");
displayQuestionNumbers.addEventListener("click", displayQuestionsWanted);
let questionsWanted = getElementsByClassName("questionsWanted");
console.log(questionsWanted);

function displayQuestionsWanted(){
    questionsWanted.classList.remove("d-none");
}