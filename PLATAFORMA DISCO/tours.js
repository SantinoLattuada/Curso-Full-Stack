let nombre = prompt("¿Cuál es tu nombre?");

while(nombre.length < 2){

    if(nombre.length == 0 || nombre.length < 2){
        if(nombre.length == 0){
            alert("Debes completar tu nombre");
            nombre = prompt("¿Cuál es tu nombre?");
        }
        else{
            nombre = prompt("Nombre demasiado corto, decinos tu nombre de verdad");    
        }
    }
}

let edad = parseInt(prompt("¿Cuál es tu edad?"));

const span = document.querySelector("#Welcome");

span.textContent = "hola" + nombre;

// alert("Hola "+ nombre +" de "+ edad + " años, te interesaría adquirir tickets?");

