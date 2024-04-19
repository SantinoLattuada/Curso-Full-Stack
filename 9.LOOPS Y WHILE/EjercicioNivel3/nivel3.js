/*2. Adiviná Un Número
En este ejercicio deberás crear un programa para que el usuario adivine un número generado al azar.

Para eso, seguí estas indicaciones:

Usá el método prompt para pedirle al usuario que ingrese un número (n), que esté entre el 1 y el 10.
Usá parseInt(n) para convertir el String en un Number.
Generá un número random entre 1 y el Valor ingresado por el usuario (n).
Pedile al usuario que descubra cuál es el número generado al azar.
Decile si acertó, si es mayor o si es menor.
Repetí el proceso hasta que adivine el número.
Cuando lo descubra, felicitalo y usá un contador que le indique cuántas oportunidades usó para adivinar el número correcto.*/

let num = parseInt(prompt("Ingrese un numero del 1 al 10"));

let numeroAlAzar = Math.floor(Math.random() * num) + 1;

let intento = parseInt(prompt("Ingrese un numero entre 1 y "+ num));
let oportunidades = 0;
while(intento != numeroAlAzar){

    if(intento < numeroAlAzar){
        alert("El numero a adivinar es mayor que "+ intento);
        intento = parseInt(prompt("Vuelve a ingresesar un numero entre 1 y "+ num));
    }
    else{
        alert("El numero a adivinar es menor que "+ intento);
        intento = parseInt(prompt("Vuelve a ingresesar un numero entre 1 y "+ num));
    }
    oportunidades++;
}
alert("Felicitaciones adivinaste el numero, y en un total de: " + oportunidades + " oportunidades");