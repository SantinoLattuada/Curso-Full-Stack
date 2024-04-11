/* 1)Hacer una calculadora pidiendo por prompt que el usuario ingrese la operación.
Suma: +
resta: -
multiplicación: *
División: /
Y luego pedir dos valores. Mostrar resultado de la operación matematica.


let operacion = prompt("Ingrese la operación a realizar: para suma '+', para resta '-', para multiplicacion, '*', para division, ' /'");

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));


let resultado;

if(operacion == '+'){
    resultado = num1 + num2;    
}
else if(operacion == '-'){
    resultado = num1 - num2;
}
else if(operacion == '*'){
    resultado = num1 * num2;
}
else{
    if(num2 != 0){
        resultado = num1 / num2;
    }
    else{
        alert("No se puede dividir por cero");    
    }
}
alert("El resultado de la operación es: " + resultado);

2)Según un número ingresado por el usuario, verificar si el mismo es par o impar
let numero = parseInt(prompt("Ingrese el numero (para saber si es par o no)"));

if(numero % 2 == 0){
    alert("El numero es par");
}
else{
    alert("El número es impar");
}
*/





/* 3) Pedir al usuario que ingrese un numero y mostrar la sumatoria 
y mostrar la sumatoria desde el 1 hasta el número ingresado.
EJ: Se ingresa el 8. 1+2+3+4+5+6+7+8 = 36
*/

/*let num1 = parseInt(prompt("Ingrese un numero"));
let resultado = 0;

for(let i = 1; i <= num1; i++){
    resultado += i;
}
alert("Sumatoria: " + resultado);
*/

let num1 = parseInt(prompt("Ingrese un numero"));
let resultado = 0;
let i = 1;

while(i <= num1){
    resultado += i;
    i++;
}
alert("Sumatoria: " + resultado);