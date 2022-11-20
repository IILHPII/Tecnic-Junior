const nombre = document.getElementById("campo_nombre");
const telefono = document.getElementById("campo_telefono");
const email = document.getElementById("campo_email");
const campo = document.getElementById("campo_texto");
const parrrafo = document.getElementById("warning")

formulariojs.addEventListener("submit",e=>{
    e.preventDefault()

    if(nombre.value.length<6){
        alert("Nombre no valido")
    }

    if(isNaN(telefono.value)){
        alert("Telefono ingresado no valido")
    }

    let expresion=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(expresion.test(email.value)){
        alert("Email valido")
    }else{
        alert("La direccion de email es incorrecta")
    }


})