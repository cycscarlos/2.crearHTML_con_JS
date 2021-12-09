window.onload = inicio;

//: Para hacer más legible el codigo, definimos tres variables
var imagen, cajaImagen, boton;

function inicio() {
  document.querySelector("main").insertAdjacentHTML(
    "beforeend",
    `<button id="boton1" class="boton">Botón 1</button>
     <button id="boton2" class="boton">Botón 2</button>
     <button id="boton3" class="boton">Botón 3</button> 
     <div id="imagen" class="imagen"><img src='assets/img/imagen.png'></div>`
  );

  //: Para hacer más legible el codigo, se sustituye el codigo por las tres variables
  imagen = document.querySelector(".imagen");
  cajaImagen = document.querySelector("#imagen");
  boton = document.querySelectorAll(".boton");

  estilos();

  boton[0].onclick = accion1;
  boton[1].onclick = accion2;
  boton[2].onclick = accion3;
  resaltar();
}

function accion1() {
  cajaImagen.style.backgroundColor = "#273b47";
  cajaImagen.style.borderRadius = "50%";
  imagen.style.transform = "rotate(360deg)";
  imagen.style.transition = "1.5s all";
  boton[0].style.visibility = "hidden";
}

function accion2() {
  if (imagen.style.display == "none") {
    imagen.style.display = "block";
    resaltar();
  } else {
    imagen.style.display = "none";
  }
}

function accion3() {
  cajaImagen.style = null;
  imagen.style = null;
  boton[0].style = null;
  boton[2].style = null;
  // resaltar();
  estilos();
}

function resaltar() {
  boton[1].style.background = "#e44d26";
  boton[1].style.borderColor = "#e44d26";
}

function estilos() {
  boton[0].style.background = "darksalmon";
  boton[0].style.border = "1px solid darksalmon";
  boton[1].style.background = "aqua";
  boton[1].style.border = "1px solid aqua";
  boton[2].style.background = "darkcyan";
  boton[2].style.border = "1px solid darkcyan";
}
