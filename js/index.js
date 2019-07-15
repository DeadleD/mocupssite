const text = document.querySelector('textarea');

const save = document.querySelector('.form_save');
const load = document.querySelector('.form_load');

save.addEventListener('click', saveText);
load.addEventListener('click', loadText);

load.addEventListener('click', loadText);

function saveText(txt){
    txt.preventDefault();
    localStorage['text'] = text.value + ', ' + name.value + ', ' +
        lastName.value + ', ' + email.value + ', ' + phoneNumber.value;
}

function loadText(){
    text.value = localStorage['text'] || '';
}