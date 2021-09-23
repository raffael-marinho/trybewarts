const loginButton = document.querySelector("#login-button");
const inputPassword = document.querySelector("#pass-input");
const inputEmail = document.querySelector("#email-input");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputEmail.value !== "" || inputPassword.value !== "") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

const funçaoCheckbox = document.querySelector("#label-infos");
const funçaoDoBotao = document.querySelector("#submit-btn");
function botao() {
  if (funçaoDoBotao.disabled === true) {
    funçaoDoBotao.disabled = false;
  } else {
    funçaoDoBotao.disabled = true;
  }
}

funçaoCheckbox.addEventListener("click", botao);
