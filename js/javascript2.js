
//JAVASCRIPT DE PAGINA DE CONTACTO: fORMULARIO
'use strict'
//entrar al formulario
const formulario = document.getElementById("formulario");

//acceso a todos los inputs
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

// Acceso a la comprobación de la validación del formulario
let valida = {
    nombre: false,
    apellido: false,
    telefono: false,
    email: false,
}

// Envío del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let errorV = false;
    for (const property in valida) {
       
        if(valida[property] == false){
            errorV = true;
        }
    }
    if(!errorV){
        formulario.submit();
    }
})

// Validación del nombre
nombre.addEventListener("blur", () => {
    let name_re = /^[a-zA-Z ]{3,40}$/;

    if (nombre.value == "" || nombre.value == null) {
        setErrorFor(nombre, "No puede dejar el nombre en blanco");
        valida.nombre = false;
    } else {
        if(!name_re.exec(nombre.value)){
            setErrorFor(nombre, "El nombre sólo puede estar formado por letras y contener entre 3 y 40 caracteres");
            valida.nombre = false;
        }else{
            setSuccessFor(nombre);
            valida.nombre = true
        }
    }
})

// Validación de los apellidos
apellidos.addEventListener("blur", () => {
    let apellidos_re = /^[a-zA-Z ]{4,60}$/;

    if (apellidos.value == "" || apellidos.value == null) {
        setErrorFor(apellidos, "No puede dejar los apellidos en blanco");
        valida.apellido = false;
    } else {
        if(!apellidos_re.exec(apellidos.value)){
            setErrorFor(apellidos, "Los apellidos sólo puede estar formado por letras y contener entre 4 y 60 caracteres");
            valida.apellido = false;
        }else{
            setSuccessFor(apellidos);
            valida.apellido = true;
        }
    }
})

// Validación del teléfono
telefono.addEventListener("blur", () => {
    let tel_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/

    if (telefono.value == "" || telefono.value == null) {
        setErrorFor(telefono, "No puede dejar los apellidos en blanco");
        valida.telefono = false;
    } else {
        if(!tel_re.exec(telefono.value)){
            setErrorFor(telefono, "El teléfono sólo puede estar formado por 9 números");
            valida.telefono = false;
        }else{
            setSuccessFor(telefono);
            valida.telefono = true;
        }
    }
})

// Validacion del email
email.addEventListener("blur", () =>{
    let email_re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if(email.value == "" || email.value == null){
        setErrorFor(email, "No puede dejar el email en blanco");
        valida.email = false;
    } else{
        if(!email_re.exec(email.value)){
            setErrorFor(email, "No ingresó un email válido");
            valida.email = false;
        }
        setSuccessFor(email);
        valida.email = true;
    }
})

// Mensaje de error
function setErrorFor(input, message) {
    
    const formControl = input.parentElement;
    const small = formControl.querySelector("small"); 
    formControl.className = "form-control error"; 
    small.innerText = message;
}

//si todo esta correcto
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}