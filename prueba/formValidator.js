const nombre = document.getElementById("campo_nombre");
const telefono = document.getElementById("campo_telefono");
const email = document.getElementById("campo_email");
const campo = document.getElementById("campo_texto");


campo.addEventListener("submit",e=>{
    e.preventDefault()
    if(nombre.value.length<6){
        alert("Nombre muy corto")
    }
})