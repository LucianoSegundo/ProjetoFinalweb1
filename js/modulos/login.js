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


async function pedirToken(nome, senha) {
    try {
      const response = await fetch("http://192.168.89.186:8087/api/v1/users", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({username: nome ,password: senha})
      });
  
      const result = await response.json();
      console.log("Success:", result);
    

    } catch (error) {
      console.error("Error:", error);
    }
  }


export { alogin };