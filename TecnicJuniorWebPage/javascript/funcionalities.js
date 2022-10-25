let valor;

let boton=document.getElementById('#confirmar');


boton.addEventListener("click",() =>{
    let input=document.getElementById("#email-id");
    valor=input.value;
})

function validarEmail(valor){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
        alert("La dirección de email " + valor + " es correcta.");
       } else {
        alert("La dirección de email es incorrecta.");
       }
}