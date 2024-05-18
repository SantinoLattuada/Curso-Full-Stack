//Incluir el paquete que maneja la BD
const mongoose = require("mongoose");

//Coneccion con la base de datos de mongo
let baseDatos = mongoose
    .connect("mongodb+srv://lattuadasantino:Plataforma5@cluster0.kr4y6zj.mongodb.net/TODO_List?retryWrites=true&w=majority&appName=Cluster0")
        .then(function(db){
        //Que sudecede si la coneccion sale bien
        console.log(".... Conectado a MongoDB.....")
    })
    .catch(function(err){
        //Que sudecede si la coneccion sale mal
        console.log(err)
    });
module.exports = baseDatos;