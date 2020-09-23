let okButton = document.getElementById("okButton");
let phrase = document.getElementById("phraseToUpper");
let completed = document.getElementById("phraseOk");


okButton.addEventListener("click", mayus);

function mayus() {
    let phraseToUpper = phrase.value;
    let phraseUp = phraseToUpper.toUpperCase();
    completed.innerHTML = phraseUp;
}