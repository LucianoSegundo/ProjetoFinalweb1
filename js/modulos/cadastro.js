let aCadastro = document.getElementById("logar");

let trocarTela = function (event) {

  event.preventDefault();

  document.getElementById("login").style.display = "grid";
  document.getElementById("cadastro").style.display = "none";
  
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

    // const response = await fetch("http://192.168.89.186:8087/api/v1/users", {

    const response = await fetch("http://localhost:8087/api/v1/users", {

      method: "POST", // or 'PUT'

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),

    });

    const result = await response.json();

    console.log("Successo em cadastrat");

  } catch (error) {
    
    console.error("Error:", error);
  }
}



export default { formulario, aCadastro }
