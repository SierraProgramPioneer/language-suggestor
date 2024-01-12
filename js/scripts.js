
// Suggest Language
function suggestLanguage(goal, end, experience, os) {
    let jsScore = 0;
    let jsGoal = 0;
    let pythonScore = 0;
    let pythonGoal = 0;
    let cScore = 0;
    let cGoal = 0;

    // Get Goal Weight
    if (goal === "webApps") {
        jsScore += 1;
        jsGoal += 1;
    }
    else if (goal === "windowsApps") {
        cScore += 1;
        cGoal += 1;
    }
    else {
        pythonScore += 1;
        pythonGoal += 1;
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
    console.log(jsScore, pythonScore, cScore);
    console.log(jsGoal, pythonGoal, cGoal);

    // Determine Language
    if (jsScore > pythonScore && jsScore > cScore) {
        return "JavaScript";
    }
    else if (pythonScore > jsScore && pythonScore > cScore) {
        return "Python";
    }
    else if (cScore > jsScore && cScore > pythonScore) {
        return "C#";
    }
    else {
        if (jsGoal > pythonGoal && jsGoal > cGoal) {
            return "JavaScript";
        }
        else if (pythonGoal > jsGoal && pythonGoal > cGoal) {
            return "Python";
        }
        else {
            return "C#";
        }
    }
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
    result = suggestLanguage(goal, end, experience, os);
    console.log(result);
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