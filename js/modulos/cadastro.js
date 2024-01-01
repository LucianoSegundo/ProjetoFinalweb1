let aCadastro = document.getElementById("logar");

let trocarTela = function(event) {
  event.preventDefault();

  let irLogar = document.getElementsByClassName("login");
  let sairCadastro = document.getElementsByClassName("cadastro");
  for (let i = 0; i < irLogar.length; i++) {
    irLogar[i].style.display = "grid";
  }
  for (let i = 0; i < sairCadastro.length; i++) {
    sairCadastro[i].style.display = "none";
  }
}

aCadastro.addEventListener("click", trocarTela);

let formulario = document.getElementById("cadastroForm");

formulario.addEventListener("submit", function cadastratForm(event) {
  event.preventDefault();
  let nome = document.getElementById("nome");
  let apelido = document.getElementById("apelido");
  let imagem = document.getElementById("imagem");
  let senha = document.getElementById("senha");
  let confSenha = document.getElementById("ConfSenha");

  if (senha.value == confSenha.value) {
    let data = {
      "name": nome.value,
      "username": apelido.value,
      "avatar_url": imagem.value,
      "password": confSenha.value
    }
    trocarTela(event);
    enviarjson(data);

  }
  else {
    alert("senhas devem ser iguais");
  }

  this.reset();

})

async function enviarjson(data) {
  try {
    const response = await fetch("http://192.168.89.186:8087/api/v1/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}



export { formulario, aCadastro }