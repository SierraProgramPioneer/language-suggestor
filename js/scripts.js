
// Suggest Language
function suggestLanguage(goal, end, experience, os) {
    let jsScore = 0;
    let pythonScore = 0;
    let cScore = 0;

    // Get Goal Weight
    if (goal === "webApps") {
        jsScore += 1;
    }
    else if (goal === "windowsApps") {
        cScore += 1;
    }
    else {
        pythonScore += 1;
    }

    // Get End Weight
    if (end === "frontEnd") {
        jsScore += 1;
    }
    else {
        cScore += 1;
        pythonScore += 1;
    }

    // Get Experience Weight
    if (experience === "begginer") {
        jsScore += 1;
    }
    else if (experience === "some") {
        pythonScore += 1;
    }
    else {
        cScore += 1;
    }

    // Get OS Weight
    if (os === "windows") {
        cScore += 1;
    }
    else {
        jsScore += 1;
        pythonScore += 1;
    }

    let languageScores = [jsScore, pythonScore, cScore];
    console.log(languageScores);
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