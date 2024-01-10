import login from "./login.js";
import alterar from "./alterar.js";

//ouvindo click no botão de delete para abrir a tela de deleção de conta
let botaoDelete = document.getElementById("deletar");

botaoDelete.addEventListener("click", function (event) {
    divApagar.style.display = "inline";
})


// ouvindo click no botão que confirma que a conta deve ser encerrada e impedindo que o evento se propague onde ele não deve ser propagado
let divApagar = document.getElementById("apagar");

let botaoApagarSim = document.getElementById("Apasim");

botaoApagarSim.addEventListener("click", function (event) {

    event.stopPropagation();

    divApagar.style.display = "none";
    alterar.formularioAlt.style.display = "none";
    requerirDelete();
    localStorage.removeItem("token");
    login.LogeDeslog("voltar");
    alert("Conta Deletada");

})

let botaoApagarNao = document.getElementById("Apanao");

botaoApagarNao.addEventListener("click", function (event) {

    event.stopPropagation();

    divApagar.style.display = "none";

})

let apagarConta = document.getElementById("apagarConta");

apagarConta.addEventListener("click", function (event) {
    event.stopPropagation();
})

//requisição para excluir conta

let requerirDelete = async function () {


    try {

        let token = localStorage.getItem("token");

        let usuario = await alterar.requisitarDados();
        // const response = await fetch("http://192.168.90.220:8087/api/v1/users/"+usuario.id, {

         const response = await fetch("http://localhost:8087/api/v1/users/" + usuario.id, {

            method: "DELETE",
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            },

        });

        if (response.status == 422) {
            console.log("falha 422");

        }
        if (response.status == 401) {
            console.log("falha 401");

        }
        if (response.ok) {

            const result = await response.json();
            console.log("Success: conta deletada ", result);

        }
        else {

            alert("Ocorreu algum erro na hora de deletar");

        }

    } catch (error) {
        console.error("Error:", error);

    }
}


export default { apagarConta, botaoApagarNao, botaoApagarSim, botaoDelete, divApagar };