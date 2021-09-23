const loginButton = document.querySelector('#login-button');
const inputPassword = document.querySelector('#pass-input');
const inputEmail = document.querySelector('#email-input');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value !== '' || inputPassword.value !== '') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.querySelector('#label-infos');
const submit = document.querySelector('#submit-btn');
function toggleButton() {
  if (submit.disabled) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

checkbox.addEventListener('click', toggleButton);
