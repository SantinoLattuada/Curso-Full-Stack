/*En este ejercicio deberás crear un Arreglo con los productos que tenés que comprar en el supermercado.

⚠️ Importante: Creá un Arreglo vacío que puedas ir llenando a medida que incorpores productos a tu lista.

Para hacer este ejercicio, seguí estos pasos:

Instanciá un Arreglo y guardalo en la variable listaDeSuper.
Agregá los productos que tenés que comprar.
Aclaración: si ingresa NO, Significa que no quiere ingresar mas productos

let listaDeSuper = [];
let i = 0;
let producto = prompt("Ingrese el producto a comprar (utilice NO para finalizar lista)");

while (producto.toUpperCase() != 'NO') {
    //listaDeSuper.push(producto);
    listaDeSuper[i] = producto;
    i++;

    producto = prompt("Ingrese el producto a comprar (utilice NO para finalizar lista)");
}
let longitudArray = listaDeSuper.length; 
alert("Mi lista es de: " + longitudArray + " elementos");

for (let j = 0; j < longitudArray; j++) {
    alert(listaDeSuper[j]);
}
*/
/*Pedirle al usuario que ingrese números hasta que ingrese la palabra "stop".
Ir guardando esos números y mostrar: 
- la cantidad de números ingresados 
- el 3º y último número ingresado
- la suma de todos los números ingresados */

function obtenerNumeros(array, sumatoria){
    let i = 0;
    let numero = prompt("Ingrese un numero o stop para terminar");

    while(numero.toLowerCase() !== 'stop'){
        array[i] = parseInt(numero);
        sumatoria += parseInt(numero);
        i++;
        numero = prompt("Ingrese un numero o stop para terminar");
    }
    return sumatoria;
}
function imprimirResultados(cantNumeros, tercerNum, ultimoNum, sumatoria){
    console.log("Cant de numeros ingresados: " + cantNumeros);
    console.log("Tercer num: " + tercerNum + " ,ultimo num: " + ultimoNum);
    console.log("Suma de todos los numeros: " + sumatoria);
}

//MAIN
let array = [];
let sumatoria = 0;

sumatoria = obtenerNumeros(array, sumatoria);

let cantNumeros = array.length;
let tercerNum = array[2];
let ultimoNum = array[cantNumeros - 1];

imprimirResultados(cantNumeros, tercerNum, ultimoNum, sumatoria);
sumatoria = 0;