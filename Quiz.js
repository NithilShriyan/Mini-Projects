const quizdata = [
    { question: "which language runs in web browser?", options: ["java", "c", "python", "javascript"], correct: "d" },
    { question: "what is full form of CSS?", options: ["cascading style sheet", "cascading style shout", "central style sheet", "central sheet style"], correct: "a" },
    { question: "what is full form SVG?", options: ["special vector graphics", "scalable vector graphics", "saturated graphics", "scalable via graphics"], correct: "b" },
    { question: "when did javascript launched?", options: ["1987", "2000", "1985", "2001"], correct: "c" }];
const quiz = document.getElementById("quiz"),
    questionelement = document.getElementById("question"),
    answerelements = document.querySelectorAll(".answer"),
    options = ["a_text", "b_text", "c_text", "d_text"].map(id => document.getElementById(id)),
    submitbutton = document.getElementById("submit");
scorebutton = document.getElementById("score");
let currentquiz = 0, score = 0;
function loadquiz() {
    resetselection();
    let qdata = quizdata[currentquiz];
    questionelement.innerText = qdata.question;
    qdata.options.forEach((option, i) => options[i].innerText = option);
}
function resetselection() {
    answerelements.forEach(ans => ans.checked = false);
}
function getselected() {
    for (let ans of answerelements) {
        if (ans.checked) {
            return ans.id;
        }
    }
    return null
}
submitbutton.onclick = function () {
    let selected = getselected();
    if (selected === null) return;
    if (selected === quizdata[currentquiz].correct) {
        score++;
    }
    currentquiz++;
    if (currentquiz < quizdata.length) {
        loadquiz();
    }
    else {
        showresult();
    }
};
function showresult() {
    quiz.innerHTML = `
	<h2>You answered ${score} out of ${quizdata.length}correctly</h2>
	<button onclick="disscore()">score</button><br/>
	<button onclick="location.reload();">Play Again</button>
	`;
}
scorebutton.onclick = function () {
    alert(`your current score is:${score * 10}`);
};
function disscore() {
    alert(`your final score is:${score * 10}`);
}
loadquiz();
