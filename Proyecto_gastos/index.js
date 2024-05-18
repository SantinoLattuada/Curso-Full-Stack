const express = require("express");
let app = express();
const PORT = 3000;
const mongoose = require("mongoose");

//Conectamos con la base de datos

mongoose.connect("mongodb+srv://lattuadasantino:Plataforma5@cluster0.kr4y6zj.mongodb.net/Cuv_Prueba?retryWrites=true&w=majority&appName=Cluster0"
)
.then(function(db){
    //Que sudecede si la coneccion sale bien
    console.log(".... Conectado a MongoDB.....")
})
.catch(function(err){
    //Que sudecede si la coneccion sale mal
    console.log(err)
});
//Incluimos el modelo de los datos
const Gastos = require("./models/gastos");

//Rutas o end-points

//Ver gastos
app.get("/operaciones", async function(req, res){
    let documentos = await Gastos.find();
    console.log(documentos);
    res.send(documentos);
});
//Guardar nuevo gasto/ingreso
app.post("/operacion", async function(req, res){
    //Guardar en la base de datos los datos de la operacion (concepto, monto, tipo y fecha)
    let datos_ejemplo = {
        concepto: "Prueba",
        monto: 12000,
        tipo: "Ingreso",
        fecha: "25-01-2024"
    }

    let nueva_op = new Gastos(datos_ejemplo); //Arma el documento a insertar
    await nueva_op.save(); //Lo inserta al documento creado
    res.send("Operación creada con exito");
});
//Modificar un gasto
app.put("/operacion/:idsadsa", function(req, res){

});
//Eliminar un gasto
app.delete("/operacion/:id", async function(req, res){
    //Obtener el id que quiero eliminar
    let id_operacion = req.params.id;
    //Buscarlo en la base de datos y eliminarlo
    await Gastos.findByIdAndDelete(id_operacion); //Eliminar en la base de datos
    res.send("Operacion Eliminada con éxito");
});



//Inicio servidor en puerto 3000
app.listen(PORT, function(){
    console.log("********************************");
    console.log("Servidor iniciado en puerto 3000");
    console.log("********************************");
});