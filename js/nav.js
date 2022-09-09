let btnLogin = document.getElementById("btnLogin");
let iconoUsuario = document.getElementById("iconoUsuario");
let iconoCarrito = document.getElementById("iconoCarrito");
let emailInputFormModal = document.getElementById("emailInputFormModal");
let passwordModal = document.getElementById("passwordModal");
let btnCerrarSecion = document.getElementById("btnCerrarSecion");
btnCerrarSecion.addEventListener("click", cerrarSecion);
const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));
document.getElementById("modalLogin").addEventListener("hidden.bs.modal", limpiarFormulario);
const formularioLogin = document.getElementById("formularioLogin");
let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
let productos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let marcas = [];
productos.forEach(producto => {
    marcas.push(producto.marca);
});
let marcasUnicas = [...new Set(marcas)];
marcasUnicas.forEach(marca => {
  document.getElementById("marcas").innerHTML += `
  <li><a class="dropdown-item" href="#">${marca}</a></li>
  `  
});

let usuarios = [
  { email: "montiel.facu@gmail.com", password: "1234Facu", admin: false },
  { email: "jochydaoua@gmail.com", password: "123456Jo", admin: true },
  { email: "victoriapalaciof@gmail.com", password: "123Vicky", admin: true },
  { email: "eliseo.espindola1@gmail.com", password: "12345678", admin: true },
  { email: "julianlopez@gmail.com", password: "12345678", admin: false }
];

formularioLogin.addEventListener("submit", ingresar);


function ingresar(e){
  e.preventDefault();
  let usuario = usuarios.find((usuario)=>{return usuario.email === emailInputFormModal.value});
  if(!usuario){
    Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario ingresado no existe',
        })
        limpiarFormulario();
  }

  if (passwordModal.value === usuario.password) {
        usuarioLogueado = usuario;
        guardarUsuariosEnLocalStorage();
        chequearUsuario();
        modalLogin.hide();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Los datos ingresados no son validos',
        })
        limpiarFormulario();
      }
  }

function guardarUsuariosEnLocalStorage() {
  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
}

function chequearUsuario(){
  if(usuarioLogueado){
    ocultarBotonLogin();
    mostrarIconoCarrito();
    mostrarIconoUsuario();
    mostrarBotonCerrarSecion();
  }
}

function ocultarBotonLogin(){
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if(usuarioLogueado){
    btnLogin.classList.add("d-none");
  } else{
    btnLogin.classList.remove("d-none");
  }
}
function mostrarIconoUsuario(){
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if(usuarioLogueado){
    iconoUsuario.classList.remove("d-none");
    if(usuarioLogueado.admin){
      //Si el usuario es admin
      if(window.location.pathname == "/"){
        // Si la pagina es el inicio
        iconoUsuario.setAttribute("href", "/pages/admin.html");
      } else {
        // si estoy en cualquiera de las otras paginas
        iconoUsuario.setAttribute("href", "../pages/admin.html");
      }
    } else {
      // si el usuario no es admin.
      if(window.location.pathname == "/"){
        // Si la pagina es el inicio
        iconoUsuario.setAttribute("href", "/pages/error.html");
      } else {
        iconoUsuario.setAttribute("href", "../pages/error.html");
      }
    }
  } else{
    iconoUsuario.classList.add("d-none");
  }
}
function mostrarIconoCarrito(){
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if(usuarioLogueado){
    if(!usuarioLogueado.admin){iconoCarrito.classList.remove("d-none");}
  } else{
    iconoCarrito.classList.add("d-none");
  }
}
function mostrarBotonCerrarSecion(){
  if(usuarioLogueado){
    btnCerrarSecion.classList.remove("d-none");
  } else{
    btnCerrarSecion.classList.add("d-none");
  }
}
function cerrarSecion(){
  localStorage.removeItem("usuarioLogueado");
  chequearUsuario();
}
function limpiarFormulario(){
  formularioLogin.reset();
  emailInputFormModal.classList.remove("is-valid");
  emailInputFormModal.classList.remove("is-invalid");
  passwordModal.classList.remove("is-valid");
  passwordModal.classList.remove("is-invalid");
}


chequearUsuario();