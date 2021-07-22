const answer = document.getElementsByClassName("answer");
const answer1 = document.getElementById('answer1');
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");

const answers = {
    one: "D",
    two: "B",
    three: "B",
    four: "B",
    five: "C",
};




answer1.addEventListener("click", (e) => {
    let selection = e.target;
    if(selection.className === answers.one) {
        selection.className = "correct-selection";
    } else {
        selection.className = "wrong-selection";
    }
    question1.style.display = "none";
    question2.style.display = "";

});