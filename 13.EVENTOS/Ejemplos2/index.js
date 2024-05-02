/*let boton = document.getElementsByClassName("Comprar");

for (let i = 0; i < boton.length; i++) {
    //Obtener IDs
    let botonId = boton[i].getAttribute("id");

    //Obtener precio
    let precio = boton[i].getAttribute("data-precio")
    boton[i].addEventListener("click", function(){

        alert("Comprar " + botonId + " -$ " + precio);
    });
}


boton[0] //zapatilla
boton[1] //Campera
boton[2] //Gorra


Ejercicio

- En un input permitir que el usario ingrese cualquier letra menos las vocales.
- Para esto, en mostrar el texto ingresado (letra por letra) exceptuando las vocales.
- Ej: texto ingresado: Hola Mundo
      texto a mostrar en un h2 = H_l_ M_nd_


Pista: el evento keyPress / keyUp
*/

let input1 = document.getElementById("input-text");
let output = document.getElementById("output-text");
let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    let textoIngresado = input1.value;

    let textoFiltrado = "";
    for (let i = 0; i < textoIngresado.length; i++) {
        let letra = textoIngresado[i];

        if(letra != 'a' && letra != 'e' && letra != 'i' && letra != 'o' && letra != 'u'){
        textoFiltrado += letra;
        }
        else{
        textoFiltrado += "_";
    }
}
output.textContent = textoFiltrado;
alert(textoFiltrado);
});
