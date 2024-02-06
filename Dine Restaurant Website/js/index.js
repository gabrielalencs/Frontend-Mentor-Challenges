const familyGatheringButton = document.querySelector(".family__gathering");
const specialEventsButton = document.querySelector(".special__events");
const socialEventsButton = document.querySelector(".social__events");
const mobileImage = document.querySelector(".events__image-mobile");
const tabletImage = document.querySelector(".events__image-tablet");
const desktopImage = document.querySelector(".events__image-desktop");
const eventTitle = document.querySelector(".events__title");
const descriptionEvent = document.querySelector(".events__text");

const eventInformation = [
    {
        mobileSrc: "assets/homepage/family-gathering-mobile.jpg",
        tabletSrc: "assets/homepage/family-gathering-tablet.jpg",
        desktopSrc: "assets/homepage/family-gathering-desktop.jpg",
        title: "Family Gathering",
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
    },
    {
        mobileSrc: "assets/homepage/special-events-mobile.jpg",
        tabletSrc: "assets/homepage/special-events-tablet.jpg",
        desktopSrc: "assets/homepage/special-events-desktop.jpg",
        title: "Special Events",
        description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
    },
    {
        mobileSrc: "assets/homepage/social-events-mobile.jpg",
        tabletSrc: "assets/homepage/social-events-tablet.jpg",
        desktopSrc: "assets/homepage/social-events-desktop.jpg",
        title: "Social Events",
        description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
    },
];

function updateEventInformation(indexArray) {
    const { mobileSrc, tabletSrc, desktopSrc, title, description } = eventInformation[indexArray];
    mobileImage.setAttribute("srcset", mobileSrc);
    tabletImage.setAttribute("srcset", tabletSrc);
    desktopImage.setAttribute("srcset", desktopSrc);
    eventTitle.textContent = title;
    descriptionEvent.textContent = description;
}

familyGatheringButton.addEventListener("click", () => {
    updateEventInformation(0);
});

specialEventsButton.addEventListener("click", () => {
    updateEventInformation(1);
});

socialEventsButton.addEventListener("click", () => {
    updateEventInformation(2);
});