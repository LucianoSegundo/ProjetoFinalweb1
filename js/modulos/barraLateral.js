let formularioAlt = document.getElementById("altInfo")

let abrirAlt2 = document.getElementById("EditeConta");
abrirAlt2.addEventListener("click",  function (event) {
  event.preventDefault();


  formularioAlt.style.display = "flex";


})

let ebibirTodo = document.getElementById("Todo");
ebibirTodo.addEventListener("click",  function (event) {
  event.preventDefault();


  document.getElementById("odo").style.display = "block";
  document.getElementById("avoritos").style.display = "none";

})
let ebibirFavoritos = document.getElementById("favoritos");
ebibirFavoritos.addEventListener("click",  function (event) {
  event.preventDefault();


  document.getElementById("odo").style.display = "none";
  document.getElementById("avoritos").style.display = "block";

})

export default {ebibirFavoritos, ebibirTodo, abrirAlt2};