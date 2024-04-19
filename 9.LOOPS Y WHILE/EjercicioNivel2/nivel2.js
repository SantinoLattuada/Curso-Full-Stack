/*1. Par O Impar
En este ejercicio deberás crear un programa que le pregunte al usuario 
un número y que le devuelva un mensaje que indique si es par o impar. 
El programa terminará si el usuario ingresa un 0 o un número negativo.*/

let num = parseInt(prompt("Ingrese un numero (para salir ponga 0 o un negativo)"));
let cantnumeros = 0;

while(num > 0){
    if (num % 2 == 0) {
        alert("El numero" + num + " es par");
    }
    else{
        alert("El numero" + num + " es impar");
    }
    num = parseInt(prompt("Ingrese un numero (para salir ponga 0 o un negativo"));
    cantnumeros++;
}
alert("Ingresaste una cantidad de: "+ cantnumeros + " numeros");

/*2. Contador De Positivos
En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. 
El programa terminará cuando se ingrese un número negativo.
Al terminar, mostrale un mensaje con la cantidad de números positivos que ingresó.*/

let numero = parseInt(prompt("Ingrese un numero (negativo para finalizar)"));
let contador = 0;

while (numero >= 0){
    contador++;
    numero = parseInt(prompt("Ingrese un numero (negativo para finalizar)"));
}
alert("Ingresaste una cantidad de: "+ contador + " numeros positivos");

/*3. Burro-Mático
En este ejercicio deberás crear un programa que ayude al Burro a preguntar al usuario "¿Ya merito llegamos?"
Si el usuario responde “Si”, el programa deberá darle un mensaje de bienvenida a Muy Muy Lejano. Sino, 
deberá mostrarle, nuevamente, el mensaje del Burro.
*/

let respuestaBurro = prompt("¿Ya merito llegamos?");

while (respuestaBurro.toLowerCase() != 'si'){
    respuestaBurro = prompt("¿Ya merito llegamos?");
}
alert("Bienvenida a Muy Muy Lejano");