// Determine Results Font Color Based on User's Favorite Color

function findBrightness(color) {
    let hex = color.substring(1);
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let brightness = (0.299 * r + 0.587 * g + 0.114 * b);
    let textColor;
    if (brightness < 128) {
        textColor = "#FFFFFF";
    }
    else {
        textColor = "#000000";
    }
    return textColor;
}


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
    if (end === "backEnd") {
        cScore += 1;
        pythonScore += 1;

    }
    else {
        jsScore += 1;
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

    // Determine Language
    if (jsScore > pythonScore && jsScore > cScore) {
        return "Java Script";
    }
    else if (pythonScore > jsScore && pythonScore > cScore) {
        return "Python";
    }
    else if (cScore > jsScore && cScore > pythonScore) {
        return "C#";
    }
    else {
        if (jsGoal > pythonGoal && jsGoal > cGoal) {
            return "Java Script";
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

    let js = document.getElementById("js");
    js.setAttribute("class", "hidden");
    let python = document.getElementById("python");
    python.setAttribute("class", "hidden");
    let c = document.getElementById("c");
    c.setAttribute("class", "hidden");

    // Gather User Input
    let color = document.getElementById("color").value;
    textColor = findBrightness(color);

    let goal = document.querySelector("input[name='goal']:checked").value;
    let end = document.querySelector("input[name='end']:checked").value;
    let experience = document.querySelector("input[name='experience']:checked").value;
    let os = document.querySelector("input[name='os']:checked").value;

    // Suggest Programming Language
    result = suggestLanguage(goal, end, experience, os);
    if (result === "Java Script") {
        document.querySelector("div#js").removeAttribute("class");
        document.querySelector("div#js").style.backgroundColor = color;
        document.querySelector("div#js").style.color = textColor;
    }
    else if (result === "Python") {
        document.querySelector("div#python").removeAttribute("class");
        document.querySelector("div#python").style.backgroundColor = color;
    }
    else if (result === "C#") {
        document.querySelector("div#c").removeAttribute("class");
        document.querySelector("div#c").style.backgroundColor = color;
    }
}


// Submit Button Event Listener
function submitAnswers() {
    //Add Event Listener to Form
    let form = document.querySelector("form");
    form.addEventListener("submit", gatherUserInput);
}


// Clear Results Button
function clearResults() {
    // Add Event Listener to Button
    let clearResultsBtn = document.getElementById("clear");
    clearResultsBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let js = document.getElementById("js");
        js.setAttribute("class", "hidden");
        let python = document.getElementById("python");
        python.setAttribute("class", "hidden");
        let c = document.getElementById("c");
        c.setAttribute("class", "hidden");
    });
}

// Window on Load Event Listener
window.addEventListener("load", function () {
    submitAnswers();
    clearResults();
});