let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let grillaCelulares = document.getElementById("grillaCelulares");
let formularioBuscador = document.getElementById("formularioBuscador");
formularioBuscador.addEventListener("submit", buscar);
let productosEncontrados = [];

function cargaDeProductos() {
  if (listaProductos.length > 0) {
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

function borrarGrilla(){
  grillaCelulares.innerHTML = "";
}

cargaDeProductos();

window.verPaginaDetalle = function (codigo){
  window.location.href = window.location.origin +"/pages/detalle.html?producto="+codigo;
}

function buscar(e){
  e.preventDefault();
  borrarGrilla()
  let valorBuscado = document.getElementById("inputBuscador").value;
  let productosEncontrados = [];
  listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
  listaProductos.forEach(producto=>{
    if(
      producto.marca.toLowerCase().indexOf(valorBuscado.toLowerCase()) !== -1 || 
      producto.nombre.toLowerCase().indexOf(valorBuscado.toLowerCase()) !== -1 ||
      producto.procesador.toLowerCase().indexOf(valorBuscado.toLowerCase()) !== -1 ||
      producto.pantalla.toLowerCase().indexOf(valorBuscado.toLowerCase()) !== -1 ||
      producto.almacenamiento.toLowerCase().indexOf(valorBuscado.toLowerCase()) !== -1
      ){
        productosEncontrados.push(producto);
        listaProductos = productosEncontrados;
        borrarGrilla();
        cargaDeProductos();
      }
    })
    if(productosEncontrados.length <= 0){
      grillaCelulares.innerHTML = `<h2 class="my-2">¡Ups! Producto no encontrado</h2>`
    }
    if(valorBuscado.length <= 0){
      listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
      borrarGrilla();
      cargaDeProductos();
    }

}