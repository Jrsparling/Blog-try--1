const themeSwitch = document.querySelector('#themeSwitch');
const body = document.querySelector('body');

// default theme is light
let mode = 'light-mode';

// listens for a click on toggle switch
themeSwitch.addEventListener('click', function(){
    console.log("clicked")
    // If light theme, apply dark background
    if (mode === 'light-mode') {
        mode = 'dark-mode';
        body.setAttribute('class', 'dark-mode');
    }
    // If dark theme, apply light background
    else {
        mode ='light-mode';
        body.setAttribute('class', 'light-mode');
    }
});
