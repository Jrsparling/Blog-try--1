const themeSwitch = document.querySelector('#themeSwitch');
const container = document.querySelector('.container');

// default theme is light
let mode = 'light-mode';

// listens for a click on toggle switch
themeSwitch.addEventListener('click', function(){
    // If light theme, apply dark background
    if (mode === 'light-mode') {
        mode = 'dark-mode';
        container.setAttribute('class', 'dark-mode');
    }
    // If dark theme, apply light background
    else {
        mode ='light-mode';
        container.setAttribute('class', 'light-mode');
    }
});