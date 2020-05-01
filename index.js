const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if(message){
    const messageShow = document.querySelector('#message-show');

    messageShow.classList.remove('hide');
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-input').classList.add('hide');
    
    messageShow.querySelector('h1').innerText = message;
}

console.log();

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;

    linkInput.select();
})