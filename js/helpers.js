export function validarEmail(input){
    let expresionRegularEmail  = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(expresionRegularEmail.test(input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}
export function validarPassword(input){
    let expresionRegularPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    if(expresionRegularPassword.test(input.value)){
        input.className = 'form-control is-valid';
    }else{
        input.className = 'form-control is-invalid';
    }
}


export function validarNombreProducto(input){
    if(input.value.length >2 && input.value.length <30){
        input.className = 'form-control is-valid';
        console.log("funcion validar nombre")
    }else{
        input.className = 'form-control is-invalid';
    }
}

export function validarMarca (opcion){
    if(opcion.value.trim().length > 0){
        opcion.className = 'form-control is-valid';
    }else{
        opcion.className = 'form-control is-invalid';
    }
}