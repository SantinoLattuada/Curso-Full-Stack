//Incluir librerias y paquetes
const express = require("express");

//Instancear express
const app = express();


//Si el cliente ingresa por [GET] a http://localhost:4000 ---> servidor me de una respuesta.
//Peticion/request (cliente) ---> respuesta/response (servidor)

//end points (rutas)
//hay que aclarar metodo (get, post) y ruta

app.get('/hola', function(req, res){
    res.send("hola"); //enviamos la respuesta
})

// [GET] https://localhost:4000/nombre/Emiliano
app.get("/nombre/:nom", function(req, res){

})
app.listen(4000, function(){
    console.log("Servidor iniciado en http://localhost:4000");
});

app.get("/nombre/:a/:b", function(req, res){
    let a = req.params.dato.a;
    let b = req.params.dato.b;

    res.send("Hola " + a + " + ", b);
})

//Ejercicio: Crear una ruta que reciba 2 parametros y sean gustos de helados
//Como respuesta el servidor debera mostrar "Mi helado favorito es de XXXXX Y XXXXXX"

app.get("/helados/:helado1/:helado2", function(req, res){
    let heladoNro1 = req.params.helado1;
    let heladoNro2 = req.params.helado2;

    res.send("Mi helado favorito es de " + heladoNro1 + " y de " + heladoNro2);
})