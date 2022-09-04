import {validarEmail} from "./helpers.js"

//llamamos a las funciones

let emailModal = document.getElementById('emailInputFormModal');
let passwordModal = document.getElementById('passswordModal');

emailModal.addEventListener('blur',()=>{validarEmail(emailModal)});

let lottie = document.getElementById("lottie");
let body = document.getElementById("body");
let timeOut = setTimeout(() => {
    mostrarBody()
}, 5000);
function mostrarBody(){
    document.querySelector("body").removeChild(lottie);
    body.classList.remove("d-none");
    clearTimeout(timeOut);
}
let marca = document.getElementById("marca");
let str = "PuntoCel";
marca.innerHTML = "";
let speed = 500;
let i = 0;
function typeWriter(){
    if(i<str.length){
        marca.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
}
}
setTimeout(typeWriter, speed);