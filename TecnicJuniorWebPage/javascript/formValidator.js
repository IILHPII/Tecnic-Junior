const nombre = document.getElementById("campo_nombre");
const telefono = document.getElementById("campo_telefono");
const email = document.getElementById("campo_email");
const campo = document.getElementById("campo_texto");
const parrrafo = document.getElementById("warning");
const colorEnviado = document.getElementById("warning");




formulariojs.addEventListener("submit",e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    parrrafo.innerHTML = ""

    if(nombre.value.length<6){
        warning += `Nombre no valido<br>`
        entrar = true
    }

    if((isNaN(telefono.value)) || (telefono.value=="")){
        warning += `Telefono ingresado no valido<br>`
        entrar = true
    }

    let expresion=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!expresion.test(email.value)){
       warning += `Email no valido<br>`
       entrar = true
    }

    if(entrar){
        parrrafo.innerHTML = warning
    }else{
        parrrafo.innerHTML = "Enviado!"
        colorEnviado.style.color='#4EB737';
    }


})