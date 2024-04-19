let nombre = prompt("¿Cuál es tu nombre?");
while(nombre.length < 3){

    if(nombre.length == 0 || nombre.length < 3){
        if(nombre.length == 0){
            alert("Debes completar el nombre");
            nombre = prompt("¿Cuál es el nombre?");
        }
        else{
            nombre = prompt("Nombre demasiado corto, tu nombre debe tener al menos 3 letras");    
        }
    }
}
let edad = parseInt(prompt("¿Cuál es tu edad?"));
while(edad <= 0){
    edad = parseInt(prompt("Porfavor, ingrese una edad real"));
}

let span = document.getElementById("welcome");
//span.textContent = "hola" + nombre;

let nombreMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();;
//Mensaje Bienvenida
span.innerHTML = "Hola " + nombreMayuscula + " de " + edad + " años. Te damos la bienvenida, a continuación tenes toda la información sobre la compra de tickets para DUKI.";
// alert("Hola "+ nombre +" de "+ edad + " años, te interesaría adquirir tickets?");

let spanNombre = document.getElementById("name");
spanNombre.innerHTML = "Hola, " + nombreMayuscula;
//<i class="fa-regular fa-ticket"></i>
const i = document.querySelector("img");
i.setAttribute("src", "fa-regular fa-ticket");