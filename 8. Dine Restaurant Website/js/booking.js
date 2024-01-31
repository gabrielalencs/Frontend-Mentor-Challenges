const buttonSubmitForm = document.querySelector(".reservations__button-form");
const inputName = document.querySelector(".input__name");
const inputEmail = document.querySelector(".input__email");
const errorMessage = document.querySelectorAll(".error__message");
const addPersonButton = document.querySelector(".count__up");
const removePersonButton = document.querySelector(".count__down");
const amountPeople = document.querySelector(".counter");
const field1 = document.querySelector(".field-1");
const field2 = document.querySelector(".field-2");
const field3 = document.querySelector(".field-3");
const field4 = document.querySelector(".field-4");
const field5 = document.querySelector(".field-5");

buttonSubmitForm.addEventListener("click", (e) => {
    if(inputName.valeu == "") {
        e.preventDefault()
        errorMessage.forEach(message => {
            message.classList.remove("hidden");
        });
    } else if(inputEmail.value == "") {
        e.preventDefault()
        errorMessage.forEach(message => {
            message.classList.remove("hidden");
        });

    } else if(field1.value == "") {
        e.preventDefault()
        errorMessage.forEach(message => {
            message.classList.remove("hidden");
        });
    } else if(field2.value == "") {
        e.preventDefault()
        errorMessage.forEach(message => {
            message.classList.remove("hidden");
        });
    } else if(field3.value == "") {
        e.preventDefault()
        errorMessage.forEach(message => {
            message.classList.remove("hidden");
        });
    } else if(field4.value == "") {
        e.preventDefault()
        errorMessage.forEach(message => {
            message.classList.remove("hidden");
        });
    } else if(field5.value == "") {
        e.preventDefault()
        errorMessage.forEach(message => {
            message.classList.remove("hidden");
        });
    } else {
        errorMessage.forEach(message => {
            message.classList.add("hidden");
        });
        alert("Thank you choosing us, please call again");
    }
});

addPersonButton.addEventListener("click", addPerson);
removePersonButton.addEventListener("click", removePerson);

function addPerson() {
    let quantityItemsNumber = Number(amountPeople.textContent);

    quantityItemsNumber++;

    amountPeople.textContent = quantityItemsNumber;
}

function removePerson() {
    let quantityItemsNumber = Number(amountPeople.textContent);

    if(amountPeople.textContent <= 1) {
        amountPeople.textContent = 1;
    } else {
        quantityItemsNumber--;

        amountPeople.textContent = quantityItemsNumber;
    }
}