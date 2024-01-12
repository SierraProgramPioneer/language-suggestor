// Goal Result
function goalWeight(goal) {
    if (goal === "webApps") {
        return "js";
    }
    else if (goal === "windowsApps") {
        return "c";
    }
    else {
        return "python";
    }
}

// End Result
function endWeight(end) {
    if (end === "fontEnd") {
        return "js";
    }
    else {
        return "c_python"
    }
}

// Experience Level Result
function experienceWeight(experience) {
    if (experience === "begginer") {
        return "js";
    }
    else if (experience === "some") {
        return "python";
    }
    else {
        return "c";
    }
}

// OS Result
function osWeight(os) {
    if (os === "windows") {
        return "c";
    }
    else {
        return "js_python"
    }
}

// Suggestion Language
function suggestLanguage(goal, end, experience, os) {
    let jsScore = 0;
    let pythonScore = 0;
    let cScore = 0;

    // Run Individual Question Functions
    goalResult = goalWeight(goal);
    endResults = endWeight(end);
    experienceResults = experienceWeight(experience);
    osResult = osWeight(os);
    console.log(osResult);

    let languageScores = [jsScore, pythonScore, cScore];
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