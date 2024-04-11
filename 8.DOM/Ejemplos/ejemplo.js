let edad = 30;
//Quiero mostrar en un alert, un texto, SOLO SI LA EDAD ES mayor o igual a 25

if(edad >= 25){
    alert("la condición SI se cumple");
}
else{
    alert("la condición NO se cumple");
}

let num1 = 5;
let num2 = 8;

if(num1 > num2){
    alert("numero1 no es mayor que numero2");
}

if(num2 > 0){
    alert("num2 es positivo");
}

if(num1 < 0 || num1 != 0){
    alert("num1 es negativo o distinto de cero");
}

num1 += 1;
if(num1 <= num2){
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


let num = prompt("Ingrese su edad"); //pide un dato al usuario
parseInt(numero); //Convertir un string a numero entero
parseFloat("45.9"); //convierto de string a numero decimal


/*Ejercicio: Pedir al usuario que ingrese su edad y sólo si es mayor de edad, mostrar un 
mensaje (alert) que diga que puede consumir alcohol.
Caso contrario, mostrar un mensaje que indique que es menor de edad.*/

let edad2 = prompt("Ingrese su edad");
parseInt(edad2);

if(edad2 >= 18){
    alert("Es mayor de edad, puede consumir alcohol");
}
else{
    alert("Es menor de edad, NO puede consumir alcohol")
}