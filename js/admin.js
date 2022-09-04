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