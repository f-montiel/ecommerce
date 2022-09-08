let btnIngresar = document.getElementById('btnIngresar');
let btnLogin = document.getElementById('btnLogin');
let iconoUsuario = document.getElementById('iconoUsuario');
let iconoCarrito = document.getElementById('iconoCarrito');
let emailInputFormModal = document.getElementById('emailInputFormModal');
let passwordModal = document.getElementById('passwordModal');
const modalLogin = new bootstrap.Modal(document.getElementById("modalLogin"));

let usuarioLogueado = JSON.parse(localStorage.getItem("listaUsuariosAdministradoresKey")) || {};

let usuarios = [
    {email:'montiel.facu@gmail.com', password: '1234Facu', admin:false},
    {email:'jochydaoua@gmail.com', password:'123456Jo', admin:true},
    {email:'victoriapalaciof@gmail.com', password:'123Vicky', admin:true},
    {email:'eliseo.espindola1@gmail.com', password:'12345678', admin:true},
    {email:'julianlopez@gmail.com', password:'12345678', admin:false},
];

btnIngresar.addEventListener('click', ingresar);

function guardarUsuariosEnLocalStorage(){ 
    localStorage.setItem("listaUsuariosAdministradoresKey", JSON.stringify(usuarioLogueado));
}


function ingresar(){
    if(usuarioLogueado)
    usuarios.forEach((usuario) =>{
        if(emailInputFormModal.value === usuario.email && passwordModal.value === usuario.password){
           usuarioLogueado = usuario; 
           btnLogin.classList.add('d-none');
           iconoUsuario.classList.remove('d-none');
           guardarUsuariosEnLocalStorage();
           modalLogin.hide();
        }
        if(usuarioLogueado.admin === true){
            btnLogin.classList.add('d-none');
            iconoCarrito.classList.add('d-none');
        }else{
            btnLogin.classList.add('d-none');
            iconoCarrito.classList.remove('d-none');
        }
    })
    
}
