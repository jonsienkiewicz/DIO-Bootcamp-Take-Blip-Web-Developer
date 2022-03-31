function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    if (h1.innerHTML === 'Light Mode ON') {
        h1.innerHTML = 'Dark Mode ON'
    } else {
        h1.innerHTML = 'Light Mode ON'
    }

    if (button.innerHTML === 'Dark Mode') {
        button.innerHTML = 'Light Mode'
    } else {
        button.innerHTML = 'Dark Mode'
    }
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)