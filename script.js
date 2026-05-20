
let botonDOM = document.getElementById("botonDOM");

let textoDOM = document.getElementById("textoDOM");

botonDOM.addEventListener("click", function(){

    textoDOM.textContent = "Texto cambiado";

});



let botonEvento = document.getElementById("botonEvento");

let mensaje = document.getElementById("mensaje");

botonEvento.addEventListener("click", function(){

    mensaje.textContent = "Has hecho clic";

});



let random = document.getElementById("random");

let numero = document.getElementById("numero");

random.addEventListener("click", function(){

    let aleatorio = Math.floor(Math.random() * 10);

    numero.textContent = aleatorio;

});



let enviar = document.getElementById("enviar");

let nombre = document.getElementById("nombre");

let resultado = document.getElementById("resultado");

enviar.addEventListener("click", function(){

    if(nombre.value == ""){

        alert("Escribe un nombre");

    }else{

        resultado.textContent = "Hola " + nombre.value;

    }

});