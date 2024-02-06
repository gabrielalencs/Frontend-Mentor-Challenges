const buttonMenuHeader = document.querySelector(".button__menu");
const headerMenuContainer = document.querySelector(".header__list");
const body = document.body;

buttonMenuHeader.addEventListener("click", openMenuHeader);

function openMenuHeader() {
    headerMenuContainer.classList.toggle("hidden");

    if(headerMenuContainer.classList.contains("hidden") && window.innerWidth < 992) {
        body.style.overflow = '';
    } else {
        body.style.overflow = 'hidden';
    }

    toggleButtonMenu();
}

function toggleButtonMenu() {
    if (headerMenuContainer.classList.contains("hidden")) {
        buttonMenuHeader.src = 'images/icon-hamburger.svg';  
    } else {
        buttonMenuHeader.src = 'images/icon-close.svg';  
    }
}