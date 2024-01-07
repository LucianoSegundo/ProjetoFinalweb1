//abrir quadro de informações do usuário
let abrirAlt = document.getElementById("dados");

let formularioAlt = document.getElementById("altInfo")

abrirAlt.addEventListener("click",async function (event) {
    event.preventDefault();
    console.log("executado");
    

    formularioAlt.style.display = "flex";
   
   
})
let exibirInfo = document.getElementById("info");
let exibirAlt = document.getElementById("alt");
let altForm = document.getElementById("AltForm");
let informações = document.getElementById("exibirInfo");

exibirInfo.addEventListener("click", function(event){
    event.stopPropagation();

    exibirInfo.style.backgroundColor = " rgb(197, 200, 225)";
    exibirAlt.style.backgroundColor = "rgb(211, 215, 246)";

    informações.style.display = "flex";
    altForm.style.display = "none";
})

exibirAlt.addEventListener("click", function(event){
    event.stopPropagation();

    exibirAlt.style.backgroundColor = " rgb(197, 200, 225)";
    exibirInfo.style.backgroundColor = "rgb(211, 215, 246)";

    altForm.style.display = "flex";
    informações.style.display = "none";
})

altForm.addEventListener("click", function(event){
    event.stopPropagation();})

informações.addEventListener("click", function(event){
    event.stopPropagation();})

    




// metodo ultilizado para conseguir os dados do usuário;
let requisitarDados = async function () {
let token = localStorage.getItem("token");


    

        try {
      
          // const response = await fetch("http://192.168.89.186:8087/api/v1//auth/token", {
            
          const response = await fetch("http://localhost:8087/api/v1/users/me", {
      
            method: "GET", 
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
              
              },
             
      
          });
      
      
          if (response.ok) {
      
            const result = response.json();
      
            console.log("Success:", result);
            return   result;
            
      
          }
          else {
      
            alert("Ocorreu algum erro");
            
          }
      
        } catch (error) {
          console.error("Error:", error);
      
        }
    
}

export default {formularioAlt, requisitarDados};