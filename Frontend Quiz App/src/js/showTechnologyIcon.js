export const containerHeaderIcon = document.getElementById('container-icon-header');
let headerIconImg = document.querySelector('#container-icon-header img');
let nameTechnologyHeader = document.querySelector('#container-icon-header span');

const containerResultIcon = document.getElementById('container-icon-result');
const nameTechnologyResult = document.getElementById('name-tech-result');


// * shows the icon of the chosen quiz in the header and in the result container
export const showIcon = (tecnology) => {
    const icons = [
        { src: './../src/images/icon-html.svg', text: 'HTML' },
        { src: './../src/images/icon-css.svg', text: 'CSS' },
        { src: './../src/images/icon-js.svg', text: 'JavaScript' },
        { src: './../src/images/icon-accessibility.svg', text: 'Accessibility' }
    ];

    containerHeaderIcon.classList.remove('hidden')

    if (tecnology == 0) {
        headerIconImg.src = icons[0].src;
        nameTechnologyHeader.textContent = icons[0].text;

        containerResultIcon.src = icons[0].src;
        nameTechnologyResult.textContent = icons[0].text;
    }

    if (tecnology == 1) {
        headerIconImg.src = icons[1].src;
        nameTechnologyHeader.textContent = icons[1].text;

        containerResultIcon.src = icons[1].src;
        nameTechnologyResult.textContent = icons[1].text;
    }

    if (tecnology == 2) {
        headerIconImg.src = icons[2].src;
        nameTechnologyHeader.textContent = icons[2].text;

        containerResultIcon.src = icons[2].src;
        nameTechnologyResult.textContent = icons[2].text;
    }

    if (tecnology == 3) {
        headerIconImg.src = icons[3].src;
        nameTechnologyHeader.textContent = icons[3].text;

        containerResultIcon.src = icons[3].src;
        nameTechnologyResult.textContent = icons[3].text;
    }
};