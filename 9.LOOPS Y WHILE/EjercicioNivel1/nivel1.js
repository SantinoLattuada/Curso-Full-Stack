/*1. Escribí while Loops
En este ejercicio deberás imprimir en la consola:

a. Todos los números entre -10 y 19. b. Todos los números pares entre 10 y 40. c. 
Todos los números impares entre 300 y 333. d. Todos los números entre 5 y 50 que 
sean divisibles por 5 y 3 al mismo tiempo.*/

//A
let numero = -10;
alert("Números entre -10  19");
while(numero <= 19){
    alert(numero);
    numero++;
}

//B
let numerosPares = 10;
alert("Números pares entre 10 y 40");
while (numerosPares <= 40) {
    if(numerosPares % 2 == 0){
        alert(numerosPares);
    }
    numerosPares++;
}

//C
let numerosImpares = 300;
alert("Números impares entre 300 y 333");
while (numerosImpares <= 333) {
    if(numerosImpares % 2 != 0){
        alert(numerosImpares);
    }
    numerosImpares++;
}

//D
let numerosDivisibles = 5;
alert("Números divisibles entre 5 y 50");
while (numerosDivisibles <= 50) {
    if(numerosDivisibles % 5 == 0 && numerosDivisibles % 3 == 0){
        alert(numerosDivisibles);
    }
    numerosDivisibles++;
}