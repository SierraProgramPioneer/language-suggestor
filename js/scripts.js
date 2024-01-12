
function gatherUserInput() {

}


function suggestLanguage(event) {

}


// Submit Button Event Listener
function submitAnswers() {
    //Add Event Listener to Form
    form = document.querySelector("form");
    form.addEventListener("submit", suggestLanguage());
}


// Clear Results Button


// Window Load Event Listener
window.addEventListener("load", submitAnswers);