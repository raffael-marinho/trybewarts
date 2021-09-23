const loginButton = document.querySelector('#login-button');
const loginInputPassword = document.querySelector('#pass-input');
const loginInputEmail = document.querySelector('#email-input');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginInputEmail.value !== '' || loginInputPassword.value !== '') {
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

const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

function showCounter() {
  counter.innerText = 500 - textarea.value.length;
}

showCounter();

textarea.addEventListener('input', showCounter);

const nameComplete = document.querySelector('#name-complete');
const email = document.querySelector('#email');
const house = document.querySelector('#home');
const family = document.querySelector('#family');
const learn = document.querySelector('#learn');
const evaluation = document.querySelector('#evaluation');
const obserb = document.querySelector('#obserb');

const inputFirstName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputHouse = document.querySelector('#house');
const inputFamily = document.querySelectorAll('.family-input');
const inputLearn = document.querySelectorAll('.learn-input');
const inputEval = document.querySelectorAll('.eval-input');

function getValues(elements) {
  const values = [];
  elements.forEach((elem) => {
    if (elem.checked) {
      values.push(elem.value);
    }
  });
  return values.join(', ');
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  nameComplete.innerText = `Nome: ${inputFirstName.value} ${inputLastName.value}`;
  email.innerText = `Email: ${inputEmail.value}`;
  house.innerText = `Casa: ${inputHouse.value}`;
  family.innerText = `Família: ${getValues(inputFamily)}`;
  learn.innerText = `Matérias: ${getValues(inputLearn)}`;
  evaluation.innerText = `Avaliação: ${getValues(inputEval)}`;
  obserb.innerText = `Observações: ${textarea.value}`;
});
