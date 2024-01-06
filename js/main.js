import cadastro from "./modulos/cadastro.js";
import logout from "./modulos/logout.js";
import login from "./modulos/login.js";


if (null === localStorage.getItem("token")) {

    let telaLogin = document.getElementById("login").style.display = "grid";
    

}
else login.avancarTela();

