import alterar from "./alterar.js";
import boards from "./boards.js";
// trocando da tela login para cadastro
let alogin = document.getElementById("Cadastrar");

alogin.addEventListener("click", function trocarTela(event) {

  event.preventDefault();
  formlogin.reset();

  document.getElementById("login").style.display = "none";
  document.getElementById("cadastro").style.display = "grid";


});

// capiturando informações do form para fazer login
let formlogin = document.getElementById("loginForm");

formlogin.addEventListener("submit", function (event) {

  event.preventDefault()

  let login = document.getElementById("nomeLogin");
  let senha = document.getElementById("senhaLogin");
  
  pedirToken(login.value, senha.value, this);


})

//requerindo token de acesso e guardando no local storage como requerido pela disciplina.
async function pedirToken(nome, senha, formulario) {

  try {

    // const response = await fetch("http://192.168.90.220:8087/api/v1/auth/token", {

     const response = await fetch("http://localhost:8087/api/v1/auth/token", {

      method: "POST", // or 'PUT'

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({ username: nome, password: senha })
    });


    if (response.ok) {

      const result = await response.json();

      console.log("Success em logar");

      localStorage.setItem("token", `${result.token_type} ${result.access_token}`);

      formulario.reset()

    

      LogeDeslog("ir");

    }
    else {

      alert("nome ou senha incorretos");

      formulario.reset()
    }

  } catch (error) {
    console.error("Error:", error);

  }
}


//ir para a tela principal e voltar
let user ;
let LogeDeslog =  function (sentido) {

  if (sentido === "ir") {

    document.getElementById("login").style.display = "none";
    document.getElementById("princi").style.display = "grid";

    document.getElementById("icone").style.display = "inline";
    document.getElementById("usuario").style.display = "flex";

    boards.montarQuadros();

    atualizarUsuario(); 
    
   
  }

  if (sentido === "voltar") {

    document.getElementById("login").style.display = "grid";
    document.getElementById("princi").style.display = "none";
    document.getElementById("usuario").style.display = "none";
    boards.desmontarQuadros();



  }



}

let atualizarUsuario = async function(){
  //receber dados do Usuário e adicionar a tela 
  user = await alterar.requisitarDados();

  document.getElementById("foto").src = user.avatar_url;
  document.getElementById("infoFoto").src = user.avatar_url;
  console.log(user.username, user.name)

  
  document.getElementById("infoApelido").textContent ='Usuário: '+user.username;
  
 document.getElementById("infoNome").textContent ='Nome: '+ user.name;
}

let TestarLogin = function () {
  if (null === localStorage.getItem("token")) {

    document.getElementById("login").style.display = "grid";

}
else LogeDeslog("ir");
  
}

export default { alogin, TestarLogin,LogeDeslog, user , atualizarUsuario };

