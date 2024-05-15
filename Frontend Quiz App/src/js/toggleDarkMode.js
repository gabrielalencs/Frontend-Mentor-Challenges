const documentHtml = document.querySelector('html');
const btnDarkMode = document.getElementById('btn-dark-mode');

const toggleDarkMode = () => {
    documentHtml.classList.toggle('dark');

    btnDarkMode.classList.toggle('active');

    setPreferenceDarkMode();
};


const setPreferenceDarkMode = () => {
    const isDarkModeEnabled = documentHtml.classList.contains('dark');

    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
};


const getPrefenceDarkMode = () =>  {
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    isDarkModeEnabled 
        ? documentHtml.classList.add('dark') 
        : btnDarkMode.classList.add('active');
};

btnDarkMode.addEventListener('change', toggleDarkMode);
window.addEventListener('DOMContentLoaded', getPrefenceDarkMode);


export { documentHtml, btnDarkMode, toggleDarkMode, setPreferenceDarkMode, getPrefenceDarkMode };