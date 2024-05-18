//Declaracion, incluimos modulos, paquetes, etc
const express = require("express");
let mongoose = require("mongoose");
let app = express();


//Coneccion con la base de datos de mongo
mongoose.connect("mongodb+srv://lattuadasantino:Plataforma5@cluster0.kr4y6zj.mongodb.net/Cuv_Prueba?retryWrites=true&w=majority&appName=Cluster0")
.then(function(db){
    //Que sudecede si la coneccion sale bien
    console.log(".... Conectado a MongoDB.....")
})
.catch(function(err){
    //Que sudecede si la coneccion sale mal
    console.log(err)
});

//Importamos el modelo de datos
let clientes_bd = require("./models/clientes");


//Rutas o end-points
// METHOD URL
//https://localhost:3000/clientes
app.get("/clientes", async function(req, res){
    console.log("Hola");
    //Vamos a obtener los clientes (Coleccion de nuestra base de datos)
    let documentos = await clientes_bd.find();
    console.log(documentos);

    res.send("Hola");
});

//Listen
const PORT = 3000;
app.listen(PORT, function(){
    console.log("********************************");
    console.log("Servidor iniciado en puerto 3000");
    console.log("********************************");
});
