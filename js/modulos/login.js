let alogin = document.getElementById("Cadastrar");

alogin.addEventListener("click", function trocarTela(event) {

  event.preventDefault();
  formlogin.reset();

  document.getElementById("login").style.display = "none";
  document.getElementById("cadastro").style.display = "grid";


});

let formlogin = document.getElementById("loginForm");

formlogin.addEventListener("submit", function (event) {

  event.preventDefault()

  let login = document.getElementById("nomeLogin");
  let senha = document.getElementById("senhaLogin");

  pedirToken(login.value, senha.value, this);


})


async function pedirToken(nome, senha, formulario) {

  try {

    // const response = await fetch("http://192.168.89.186:8087/api/v1//auth/token", {

    const response = await fetch("http://localhost:8087/api/v1/auth/token", {

      method: "POST", // or 'PUT'

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams({ username: nome, password: senha })
    });


    if (response.ok) {

      const result = await response.json();

      console.log("Success:", result);

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

let LogeDeslog = function (sentido) {

  if (sentido === "ir") {

    document.getElementById("login").style.display = "none";
    document.getElementById("princi").style.display = "grid";

    let sair = document.getElementById("icone");
    sair.style.display = "inline";
  }

  if (sentido === "voltar") {

    document.getElementById("login").style.display = "grid";
    document.getElementById("princi").style.display = "none";

  }



}

export default { alogin, LogeDeslog  };

