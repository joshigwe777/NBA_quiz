const answer = document.getElementsByClassName("answer");
const answer1 = document.getElementById('answer1');

const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
const question7 = document.getElementById("question7");
const question8 = document.getElementById("question8");
const question9 = document.getElementById("question9");
const question10 = document.getElementById("question10");

const scoreboard = document.querySelector("#score");
const answers = document.querySelectorAll("answers");
const questions = [question1, question2, question3];
let score = 0;
let questionboard = document.querySelector(".questions");



const correct_answers = ["D", "B", "B", "B", "C", "D", "D", "D", "C", "C"];



// function checkAnswer(question, answer, selection) {
    // let answer = document.getElementById(`answer${question}`);
// }

function changeQuestion(current, next) {
    current.style.display = "none";
    next.style.display = "";
}

    questionboard.addEventListener("click", (e) => {
        let selection = e.target;
        let q = 0;
            if(selection.className === correct_answers[q]) {
                selection.className = "correct-selection";
                score+=1;
                scoreboard.innerHTML = `${score}`;
        
            } else {
                selection.className = "wrong-selection";
            }
            setTimeout(() => {
                questions[q].style.display = "none";
                questions[q+1].style.display = "";
            }, 1000);
            q++;
        }
        
    
    );






