const answer = docement.getElementByClassName("answer");





answer.addEventListener('click', (e) => {
    let selection = e.target;
    selection.className = "correct-selection";
})