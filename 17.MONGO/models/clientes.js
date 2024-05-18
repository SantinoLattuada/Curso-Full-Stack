//Crear como un molde de los datos y tipos de datos que tiene la coleccion familia
//Datos en familia nombre, edad, sexo, parestensco, conviven (bool)

let mongoose = require("mongoose");
let schema = mongoose.Schema;

//Crear un esquema con estructura de datos que tienen/tendran los documentos de esta coleccion

let clientes = new schema({
    nombre: String,
    apellido: String,
    email: String,
    genero: String,
    idioma: String,
    titulo: String,
    talle: String,
    edad: Number,
    fecha_nac: String,
});

//Exportar el modulo que acabamos de crear
module.exports = mongoose.model("pruebas", clientes);