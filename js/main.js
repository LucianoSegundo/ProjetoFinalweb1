import { formulario, aCadastro } from "./modulos/cadastro.js";
import { alogin, avancarTela } from "./modulos/login.js";


if (null === localStorage.getItem("token")) {

    let telaLogin = document.getElementsByClassName("login");

    for (let i = 0; i < telaLogin.length; i++) {
        telaLogin[i].style.display = "grid";
    }

}
else avancarTela();

