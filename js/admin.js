import {validarAlmacenamiento, validarCamara, validarCantidad, validarDescripcion, validarImagen, validarMarca, validarNombreProducto, validarPantalla, validarPrecio, validarProcesador} from "./helpers.js"
import Producto from "./claseProducto.js"

//ventana modal Administrador
const modalAdministrador = new bootstrap.Modal(document.getElementById("productoModal"));
const botonModalAdministrador = document.getElementById("botonModalProducto");

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
let codigoProducto = formularioProducto.codigoProducto;
formularioProducto.addEventListener("submit",crearNuevoProducto);

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
botonModalAdministrador.addEventListener("click",mostrarFormulario);

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


function mostrarFormulario(){
    modalAdministrador.show();
    codigoProducto.value = uuidv4();
}

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

function crearNuevoProducto(e){
    e.preventDefault()

    let nuevoProducto = new Producto(
        codigoProducto.value,
        nombreProducto.value,
        marcaProducto.value,
        procesadorProducto.value,
        camaraProducto.value,
        almacenamientoProducto.value,
        pantallaProducto.value,
        imagenProducto.value,
        cantidadProducto.value,
        precioProducto.value,
        descripcionProducto.value
    )
    agregarNuevoProducto(nuevoProducto);
    console.log(listaProductos);
    limpiarFormulario();
    modalAdministrador.hide();
}

function agregarNuevoProducto(nuevoProducto){
    listaProductos.push(nuevoProducto);
    guardarProductosenLocalStorage();
}

function limpiarFormulario(){
    formularioProducto.reset();
    nombreProducto.classList.remove("is-valid");
    marcaProducto.classList.remove("is-valid");
    procesadorProducto.classList.remove("is-valid");
    camaraProducto.classList.remove("is-valid");
    almacenamientoProducto.classList.remove("is-valid");
    pantallaProducto.classList.remove("is-valid");
    imagenProducto.classList.remove("is-valid");
    cantidadProducto.classList.remove("is-valid");
    precioProducto.classList.remove("is-valid");
    descripcionProducto.classList.remove("is-valid");
}

//agregar en localStorage
function guardarProductosenLocalStorage(){
    localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}
