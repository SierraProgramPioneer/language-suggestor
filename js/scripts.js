

function suggestLanguage() {

}

function submitAnswers() {
    //Add Event Listener to Form
    form = document.querySelector("form");
    form.addEventListener("submit", suggestLanguage);
}


window.addEventListener("load", submitAnswers);