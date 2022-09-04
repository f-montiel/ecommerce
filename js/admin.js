import {validarAlmacenamiento, validarCamara, validarCantidad, validarDescripcion, validarImagen, validarMarca, validarNombreProducto, validarPantalla, validarPrecio, validarProcesador} from "./helpers.js"

let formularioProducto = document.getElementById("formularioProducto");
let nombreProducto = formularioProducto.nombreProducto;
let marcaProducto = formularioProducto.marcaProducto;
let almacenamientoProducto = formularioProducto.almacenamientoProducto;
let procesadorProducto = formularioProducto.procesadorProducto;
let camaraProducto = formularioProducto.camaraProducto;
let pantallaProducto = formularioProducto.pantallaProducto;
let imagenProducto = formularioProducto.imagenProducto;
let cantidadProducto = formularioProducto.cantidadProducto;
let precioProducto = formularioProducto.precioProducto;
let descripcionProducto = formularioProducto.descripcionProducto;


nombreProducto.addEventListener("blur",()=>{validarNombreProducto(nombreProducto)});
marcaProducto.addEventListener("change",()=>{validarMarca(marcaProducto)});
almacenamientoProducto.addEventListener("blur",()=>{validarAlmacenamiento(almacenamientoProducto)});
procesadorProducto.addEventListener("blur",()=>{validarProcesador(procesadorProducto)});
camaraProducto.addEventListener("blur",()=>{validarCamara(camaraProducto)});
pantallaProducto.addEventListener("blur",()=>{validarPantalla(pantallaProducto)});
imagenProducto.addEventListener("blur",()=>{validarImagen(imagenProducto)});
cantidadProducto.addEventListener("blur",()=>{validarCantidad(cantidadProducto)});
precioProducto.addEventListener("blur",()=>{validarPrecio(precioProducto)});
descripcionProducto.addEventListener("blur",()=>{validarDescripcion(descripcionProducto)});


let tabProductos = document.getElementById("tabProductos");
let tabUsuarios = document.getElementById("tabUsuarios");
tabProductos.addEventListener("click", function (){mostrarTabla("productos"); activeTab(this)});
tabUsuarios.addEventListener("click",function (){mostrarTabla("usuarios"); activeTab(this)});
let articuloProductos = document.getElementById("productos");
let articuloUsuarios = document.getElementById("usuarios");
function mostrarTabla(tabla){
    ocultarTablas();
    if(tabla == "productos"){
        articuloProductos.classList.remove("d-none");
    }
    if(tabla == "usuarios"){
        articuloUsuarios.classList.remove("d-none");
    }
}
function ocultarTablas(){
    articuloProductos.classList.add("d-none");
    articuloUsuarios.classList.add("d-none");
}
function activeTab(tab){
    tabProductos.classList.remove("active");
    tabUsuarios.classList.remove("active");
    tab.classList.add("active");
}