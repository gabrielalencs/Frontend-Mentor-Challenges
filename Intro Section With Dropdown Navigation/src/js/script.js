const buttonMenuMobile = document.querySelector(".menu-mobile-btn");
const buttonMenuMobileIcon = document.querySelector(".menu-mobile-btn img");
const menuContainer = document.querySelector(".menu-container");
const menuDropdownItem = document.querySelector(".menu-dropdown-item-one");
const menuDropdownItemTwo = document.querySelector(".menu-dropdown-item-two");
const menuDropdownContainer = document.querySelector(".dropdown-menu-list-one");
const menuDropdownContainerTwo = document.querySelector(".dropdown-menu-list-two");
const body = document.querySelector("body");

buttonMenuMobile.addEventListener("click", openMenuMobile);

function openMenuMobile() {
    if (window.innerWidth < 768) {
        menuContainer.classList.toggle("menu-mobile-open");
        body.classList.toggle("bg-black-transparent");
    }

    toggleMenuIcon();
}

function toggleMenuIcon() {
    if (menuContainer.classList.contains("menu-mobile-open")) {
        buttonMenuMobileIcon.src = "../images/icon-close-menu.svg";
    } else {
        buttonMenuMobileIcon.src = "../images/icon-menu.svg";
    }
}

menuDropdownItem.addEventListener("click", () => {
    menuDropdownContainer.classList.toggle("dropdown-menu-open");
});

menuDropdownItemTwo.addEventListener("click", () => {
    menuDropdownContainerTwo.classList.toggle("dropdown-menu-open");
});



