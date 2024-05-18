const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors"); //Incluimos paquete cors
const bodyParser = require("body-parser");

//Utilizar paquete CORS 
app.use(cors());
//Configuramos el body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Incluir la conexion con la base de datos
let coneccionBD = require("./conexion");

//Incluir archivo de estructura
let tareas = require("./models/tareas");

//Rutas
//* --- CREATE --- * //
app.post("/tarea", async function(req, res){
    /*let datos = {
        titulo: "Hacer proyecto final de Bootcamp",
        descripcion: "Aca va la descp de la tarea",
    }*/
    let datos = req.body;
    console.log(datos);
    let nuevoDoc = new tareas(datos);
    await nuevoDoc.save();
    res.send("Tarea creada correctamente");
});
//* --- READ --- * //
app.get("/tareas", async function(req, res){
    let documentos = await tareas.find();
    console.log(documentos);
    res.send(documentos);
});
//* --- UPDATE --- * //
app.put("/tarea/:id_tarea", function(req, res){

});
//* --- DELETE --- * //
app.delete("/tarea/:id_tarea", function(req, res){

});



app.listen(PORT, function(){
    console.log("Servidor iniciado en puerto: ", PORT);
});