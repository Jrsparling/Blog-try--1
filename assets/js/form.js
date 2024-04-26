const submitEl = document.querySelector('#submit');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submissionResponseEl = document.querySelector('#response');

function formSubmit(event) {
    event.preventDefault();
    const response =
    usernameInput.value +
    titleInput.value +
    contentInput.value +
    '';
    submissionResponseEl.textContent = response;
    }

    submitEl.addEventListener('click', formSubmit);

    if('') {
        result = 'Please fill out rest of form';}
    else{
        result = formSubmit
    }
    console.log()