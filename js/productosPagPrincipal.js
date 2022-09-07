let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let grillaCelulares = document.getElementById("grillaCelulares");

function cargaDeProductos() {
  if (listaProductos.length >= 0) {
    listaProductos.forEach((celular) => {
      crearGrilla(celular);
    });
  }
}

function crearGrilla(celular) {
  grillaCelulares.innerHTML += `
    <div class="card col-12 col-md-3 my-4 mx-3">
     <img src="${celular.imagen}" class="card-img-top" alt="${celular.nombre}">
     <div class="card-body">
     <h5 class="card-title fw-bolder">${celular.nombre}</h5>
     <span class="badge rounded-pill btn-celeste">Conexión Total</span>
    <p class="card-text fw-bolder mt-2">${celular.precio}</p>
     <button class="btn btn-violeta fw-bolder" onclick="verPaginaDetalle('${celular.codigo}')">Ver más</button>
     </div>
     </div>`;
}

cargaDeProductos();

window.verPaginaDetalle = function (codigo){
    console.log(window.location.origin +"/pages/detalle.html?producto="+codigo);
    window.location.href = window.location.origin +"/pages/detalle.html?producto="+codigo;
}