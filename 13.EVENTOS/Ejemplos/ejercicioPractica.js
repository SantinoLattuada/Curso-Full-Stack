/*
var num1 = parseFloat(document.getElementById('num1').value);
var num2 = parseFloat(document.getElementById('num2').value);


var resultado = num1 + num2;
console.log('La suma de ' + num1 + ' y ' + num2 + ' es: ' + resultado);

alert('La suma de ' + num1 + ' y ' + num2 + ' es: ' + resultado);*/

//Selecciono el elemento del HTML
let miBoton = document.getElementsByTagName("button");

//Trigger o disparador
miBoton[0].addEventListener("click", function(){
    //Escibo lo que pasa cuando alguien clickea el boton

    let num1 = 10;
    let num2 = 14;
    let resultado = num1 + num2;
    alert("clickeaste el boton"+ resultado);
});
miBoton[1].addEventListener("click", function(){
    alert("Hola mundo");

});


let input = document.getElementById("texto");
let btnObtener = document.getElementById("obtener");

btnObtener.addEventListener("click", function(){
    let valorIngresado = input.value;
    alert("El usuario ingresó: "+ valorIngresado)
})

//Ejercicio hacer una calculadora con dos input y un boton de suma. cuando el usuario
//haga click en el boton se sumen los dos valores ingresados en cada input

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let suma = document.getElementById("suma");

suma.addEventListener("click", function(){
    let valor1 = parseInt(num1.value);
    let valor2 = parseInt(num2.value);
    let valorFinal = valor1 + valor2;
    alert("El total de la suma es: "+ valorFinal);
});