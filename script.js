let displayQuestionNumbers = document.getElementById("displayQuestionNumbers");
displayQuestionNumbers.addEventListener("click", displayQuestionsWanted);
let questionsWanted = document.getElementsByClassName("questionsWanted");
function displayQuestionsWanted() {
    for (let i of questionsWanted) {
        
        i.classList.remove("d-none");


    }
}

