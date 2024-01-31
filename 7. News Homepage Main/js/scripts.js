const buttonOpenSidebar = document.querySelector(".sidebar-open");
const buttonCloseSidebar = document.querySelector(".sidebar-close");
const sidebarContainer = document.querySelector(".sidebar");

buttonCloseSidebar.addEventListener("click", toggleSidebar);
buttonOpenSidebar.addEventListener("click", toggleSidebar);


function toggleSidebar() {
    sidebarContainer.classList.toggle("hidden");

    checkSidebarStatus();
}

function checkSidebarStatus() {
    if (!(sidebarContainer.classList.contains("hidden"))) {
        sidebarContainer.parentNode.classList.add("body-background");
        sidebarContainer.parentNode.scrollTo(0, 0);
        sidebarContainer.parentNode.style.overflow = "hidden";
    } else {
        sidebarContainer.parentNode.classList.remove("body-background")
        sidebarContainer.parentNode.style.overflow = "auto";
    }
}
