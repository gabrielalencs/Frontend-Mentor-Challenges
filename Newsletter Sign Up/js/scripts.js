const singUpInputEmail = document.querySelector("#input-email");
const singUpSubmitButton = document.querySelector(".submit-button");
const sucessDismissButton = document.querySelector(".dismiss-button");
const cardSignUp = document.querySelector(".card-sign-up");
const cardSucess = document.querySelector(".card-sucess");
const emailRegistered = document.querySelector(".registered-email");
const errorMessage = document.querySelector(".message-error");

singUpSubmitButton.addEventListener("click", submitEmail);
sucessDismissButton.addEventListener("click", toggleCards);

function toggleCards() {
    cardSucess.classList.toggle("hidden");
    cardSignUp.classList.toggle("hidden");
}

function submitEmail(event) {
    event.preventDefault();

    if (singUpInputEmail.checkValidity() && singUpInputEmail.value) {
        emailRegistered.textContent = singUpInputEmail.value;
        toggleCards();
        singUpInputEmail.value = "";
        singUpInputEmail.classList.remove("error");
        errorMessage.classList.add("hidden");
    } else {
        singUpInputEmail.classList.add("error");
        errorMessage.classList.remove("hidden");
    }
}