//console.log("Hola mundo, este es el server en NODE y hago cambios");

//Crear servidor HTTP
// [metodo]  [URL]
// GET http://localhost:80/listadoClientes --> Devolve un texto
// POST http://localhost:80/formulario --> Guardar en base de datos lo que envía el cliente

/*Metodo 1: Crear servidor web con NODE PURO
const http = require("http");
const fs = require("fs");

//Creamos un objeto con nuestro servidor usando el modulo http
http.createServer(function(req, res){

    //Creando la cabecera de la respuesta que va a dar el servidor
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    });

    //Tomamos el archivo .html utilizando el modulo "fs"
    let archivoHtml = fs.createReadStream(__dirname + '/index.html');

    //Enviamos el archivo como parte de la respuesta
    archivoHtml.pipe(res);

    console.log("Estamos visitante el sitio http://localhost:3000");
}).listen(3000); //El servidor escucha el puerto 3000 (http://localhost:3000)
*/

//Metodo 2: Crear servidor web con Express

//Instanciamos o incluimos los paquetes/modulos necesarios
const express = require("express");
const app = express();

//Especificamos la ruta y metodo de la peticion del cliente
app.get('/inicio', function(req, res){
    //Enviar el archivo
    res.sendFile(__dirname + "/index.html");
});
//Escuchar puerto 3000
app.listen(3000);