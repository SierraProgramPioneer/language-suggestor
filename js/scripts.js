// Goal Result
function goalWeight(goal) {
    console.log(goal);
}

// End Result
function endWeight(end) {
    console.log(end);
}

// Experience Level Result
function experienceWeight(experience) {
    console.log(experience);
}

// OS Result
function osWeight(os) {
    console.log(os);
}

// Suggestion Language
function suggestLanguage(goal, end, experience, os) {
    let jsScore = 0;
    let pythonScore = 0;
    let cScore = 0;

    // Run Individual Question Functions
    goalWeight(goal);
    endWeight(end);
    experienceWeight(experience);
    osWeight(os);

    let codeScores = [jsScore, pythonScore, cScore];
    console.log(codeScores);
}


// Get User Inputs
function gatherUserInput(event) {
    // Prevent Default Refresh
    event.preventDefault();

    // Refresh Results

    let result = document.getElementById("result");
    result.setAttribute("class", "hidden");

    // Gather User Input
    let goal = document.querySelector("input[name='goal']:checked").value;
    let end = document.querySelector("input[name='end']:checked").value;
    let experience = document.querySelector("input[name='experience']:checked").value;
    let os = document.querySelector("input[name='os']:checked").value;
    let color = document.getElementById("color").value;

    // Suggest Programming Language
    suggestLanguage(goal, end, experience, os);
    // result = suggestLanguage(goal, end, experience, os, color);
    //document.selectElementById("result").setAttribute("color", color);
    // document.selectElementById("result").setAttribute("innerText", results);
}


// Submit Button Event Listener
function submitAnswers() {
    //Add Event Listener to Form
    let form = document.querySelector("form");
    form.addEventListener("submit", gatherUserInput);
}


// Clear Results Button


// Window Load Event Listener
window.addEventListener("load", submitAnswers);