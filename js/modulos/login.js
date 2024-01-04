let alogin = document.getElementById("Cadastrar");

alogin.addEventListener("click", function trocarTela(event) {
  event.preventDefault();

  let irLogar = document.getElementsByClassName("login");
  let sairCadastro = document.getElementsByClassName("cadastro");
  for (let i = 0; i < irLogar.length; i++) {
    irLogar[i].style.display = "none";
  }
  for (let i = 0; i < sairCadastro.length; i++) {
    sairCadastro[i].style.display = "grid";
  }
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

      localStorage.setItem("token", JSON.stringify(result));

      formulario.reset()
      avancarTela();

    }
    else {
      console.log("falah");
      alert("nome ou senha incorretos");
      formulario.reset()
    }

  } catch (error) {
    console.error("Error:", error);

  }
}

let avancarTela = function () {


  let irLogar = document.getElementsByClassName("login");
  let irTprincipal = document.getElementsByClassName("princi");
  for (let i = 0; i < irLogar.length; i++) {
    irLogar[i].style.display = "none";
  }
  for (let i = 0; i < irTprincipal.length; i++) {
    irTprincipal[i].style.display = "grid";
  }
}


export { alogin, avancarTela };