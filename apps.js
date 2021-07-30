const answer = document.querySelector("answer");
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
const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
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
let q = 0;
    questionboard.addEventListener("click", (e) => {
        let selection = e.target;
            if(selection.className === correct_answers[q]) {
                selection.className = "correct-selection";
                score+=1;
                scoreboard.innerHTML = `${score}`;
        
            } else {
                selection.className = "wrong-selection";
            }
            setTimeout(() => {
                if(q===9) {
                    alert(`Your final score is ${score}`);
                } else {
                    questions[q].style.display = "none";
                    questions[q+1].style.display = "";
                    q++;
                }
            }, 1000);
            
        }
        
    
    );






