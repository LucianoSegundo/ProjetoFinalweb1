import login from "./login.js";
//abrir quadro de informações do usuário

let abrirAlt = document.getElementById("dados");
let exibirInfo = document.getElementById("info");
let exibirAlt = document.getElementById("alt");
let altForm = document.getElementById("AltForm");
let informações = document.getElementById("exibirInfo");
let formularioAlt = document.getElementById("altInfo")

abrirAlt.addEventListener("click",  function (event) {
  event.preventDefault();
  
  
  formularioAlt.style.display = "flex";
  
  
})



// adição da alteração entre tela de informaçõoes e tela de  alteração;

exibirInfo.addEventListener("click", function (event) {

  event.stopPropagation();

  funcaoInfo();

})

let funcaoInfo = function () {

  exibirInfo.style.backgroundColor = " rgb(197, 200, 225)";
  exibirAlt.style.backgroundColor = "rgb(211, 215, 246)";

  informações.style.display = "flex";
  altForm.style.display = "none";
}

exibirAlt.addEventListener("click", function (event) {
  event.stopPropagation();

  exibirAlt.style.backgroundColor = " rgb(197, 200, 225)";
  exibirInfo.style.backgroundColor = "rgb(211, 215, 246)";

  altForm.style.display = "flex";
  informações.style.display = "none";
})

altForm.addEventListener("click", function (event) {
  event.stopPropagation();
})


informações.addEventListener("click", function (event) {
  event.stopPropagation();
})

// coleta das informações do form para alteração
altForm.addEventListener("submit", async function (event) {

  event.preventDefault();

  let nome = document.getElementById("Altnome");
  let imagem = document.getElementById("Altimagem");
  let senha = document.getElementById("Altsenha");
  let confSenha = document.getElementById("AltConfSenha");

  let usuario = await requisitarDados();

  if ((senha.value === confSenha.value)) {
    let nome2 = nome.value;
    let imagem2 = imagem.value;
    let senha2 = senha.value;
   
     if(nome.value == "") nome2 = usuario.name;
     if(imagem.value == "") imagem2 = usuario.avatar_url;
     if(senha.value == "") senha2 = usuario.password;
    
    let corpo = {

      "name": nome2,
      "username": usuario.username,
      "password": senha2,
      "avatar_url": imagem2
    }


    try {
      let token = localStorage.getItem("token");

      // const response = await fetch("http://192.168.90.220:8087/api/v1/users/"+usuario.id, {

       const response = await fetch("http://localhost:8087/api/v1/users/" + usuario.id, {

        method: "PATCH",
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(corpo),


      });

      if (response.ok) {

        const result = await response.json();
        console.log("dados enviados com sucesso");

        login.atualizarUsuario();
        altForm.reset();
        funcaoInfo();

      }
      else {

        alert("Ocorreu algum erro no envio das alterações");

      }

    } catch (error) {
      console.error("Error:", error);

    }
  }
})






// metodo ultilizado para conseguir os dados do usuário;
let requisitarDados = async function () {
  let token = localStorage.getItem("token");




  try {

    // const response = await fetch("http://192.168.90.220:8087/api/v1/users/me", {

     const response = await fetch("http://localhost:8087/api/v1/users/me", {

      method: "GET",
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',

      },


    });

    if (response.status == "401") {
      alert("Sessão inspirou, necessário que refaça o login");

      localStorage.removeItem("token");
      login.LogeDeslog("voltar");
    }
    else if (response.ok) {

      const result = response.json();

      console.log("dados coletados com sucesso");
      return result;


    }
    else {

      alert("Ocorreu algum erro na requisição de dados");

    }

  } catch (error) {
    console.error("Error:", error);

  }

}

export default { formularioAlt, requisitarDados };