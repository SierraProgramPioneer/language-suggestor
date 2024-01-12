

function suggestLanguage() {


}

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


    console.log(goal);
    console.log(end);
    console.log(experience);
    console.log(os);
    console.log(color);

    // // Suggest Programming Language
    // result = suggestLanguage(goal, end, experience, os, color);
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