let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let documento = new Schema({
    titulo: String,
    descripcion: String,
    finalizada: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("tareas", documento);