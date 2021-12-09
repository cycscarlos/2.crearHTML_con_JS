window.onload = inicio;

function inicio() {
  document.querySelector("main").insertAdjacentHTML(
    "beforeend",
    `<button id="boton1" class="boton">Botón 1</button>
     <button id="boton2" class="boton">Botón 2</button>
     <button id="boton3" class="boton">Botón 3</button> 
     <div id="imagen" class="imagen"><img src='assets/img/imagen.png'></div>`
  );
  document.querySelectorAll(".boton")[0].style.background = "darksalmon";
  document.querySelectorAll(".boton")[0].style.border = "1px solid darksalmon";
  document.querySelectorAll(".boton")[1].style.background = "aqua";
  document.querySelectorAll(".boton")[1].style.border = "1px solid aqua";
  document.querySelectorAll(".boton")[2].style.background = "darkcyan";
  document.querySelectorAll(".boton")[2].style.border = "1px solid darkcyan";

  document.querySelectorAll(".boton")[0].onclick = accion1;
  document.querySelectorAll(".boton")[1].onclick = accion2;
  document.querySelectorAll(".boton")[2].onclick = accion3;
}

function accion1() {
  document.querySelector("#imagen").style.backgroundColor = "#00B0F6";
  document.querySelector(".imagen").style.borderRadius = "50%";
  document.querySelector(".imagen").style.transform = "rotate(30deg)";
  document.querySelector(".imagen").style.transition = "1.5s all";
  document.querySelectorAll(".boton")[0].style.visibility = "hidden";
}

function accion2() {
  if (document.querySelector(".imagen").style.display == "none") {
    document.querySelector(".imagen").style.display = "block";
  } else {
    document.querySelector(".imagen").style.display = "none";
  }
}

function accion3() {
  document.querySelector("#imagen").style = null;
  document.querySelector(".imagen").style = null;
  document.querySelectorAll(".boton")[0].style = null;
  document.querySelectorAll(".boton")[1].style = null;
  document.querySelectorAll(".boton")[2].style = null;
}
