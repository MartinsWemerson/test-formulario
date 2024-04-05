const form = document.getElementById("form");
const username = document.getElementById("name");
const sobrenome = document.getElementById("lastName");
const email = document.getElementById("email");
const senha = document.getElementById("password");

form.addEventListener("submit", (Event) => {
  Event.preventDefault();
  chekForm();
});

username.addEventListener("blur", () => {
  chekInputUsername();
});
sobrenome.addEventListener("blur", () => {
  chekInputSobrenome();
});

email.addEventListener("blur", () => {
  chekInputEmail();
});
senha.addEventListener("blur", () => {
  chekInputSenha();
});
function chekInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Coloque seu Nome!");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function chekInputSobrenome() {
  const sobrenomeValue = sobrenome.value;

  if (sobrenomeValue === "") {
    errorInput(sobrenome, "Coloque seu Sobrenome.");
  } else {
    const formItem = sobrenome.parentElement;
    formItem.className = "form-content";
  }
}

function chekInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatorio!");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function chekInputSenha() {
  const senhaValue = senha.value;

  if (senhaValue === "") {
    errorInput(senha, " a senha é obrigatoria.");
  } else if (senhaValue.length < 8) {
    errorInput(senha, "A senha deve conter 8 caracteres.");
  } else {
    const formItem = senha.parentElement;
    formItem.className = "form-content";
  }
}

function chekForm() {
  chekInputUsername();
  chekInputSobrenome();
  chekInputEmail();
  chekInputSenha();

  const formItems = form.querySelectorAll(".form-content");
  const Validado = [...formItems].every((item) => {
    return item.className === "form-content";
  });
  if (Validado) {
    alert("Cadastrado Com Sucesso!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMenssage = formItem.querySelector("span");

  textMenssage.innerText = message;

  formItem.className = "form-content error";
}
