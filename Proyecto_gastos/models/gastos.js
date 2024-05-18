let mongoose = require("mongoose");
let schema = mongoose.Schema;

//Crear un esquema con estructura de datos que tienen/tendran los documentos de esta coleccion

let gastos = new schema({
    concepto: String, //Viaje
    monto: Number, //1450,44
    tipo: String, //Gasto o ingreso
    fecha: String, //15/05/2024
});

//Exportar el modulo que acabamos de crear
module.exports = mongoose.model("gastos", gastos);