import login from "./login.js";

let Iconedeslogar = document.getElementById("icone");

Iconedeslogar.addEventListener("click", function (event) {
    esconder.style.display = "inline";
})

let ClassEsconder = document.getElementsByClassName("esconder");

for (let i = 0; i < ClassEsconder.length; i++) {

    ClassEsconder[i].addEventListener("click", function (event) {
        event.stopPropagation();

        ClassEsconder[i].style.display = "none";
    })
}

let esconder = document.getElementById("escDeslo");

let botaoSim = document.getElementById("sim");

botaoSim.addEventListener("click", function (event) {

    event.stopPropagation();

    localStorage.removeItem("token");
    Iconedeslogar.style.display = "none";
    esconder.style.display = "none";

    login.LogeDeslog("voltar");

})

let BotaoNao = document.getElementById("nao");

BotaoNao.addEventListener("click", function (event) {

    event.stopPropagation();

    esconder.style.display = "none";

})

let divDeslogar = document.getElementById("deslogar");

divDeslogar.addEventListener("click", function (event) {
    event.stopPropagation();
})

export default { Iconedeslogar, esconder, botaoSim, BotaoNao, divDeslogar };