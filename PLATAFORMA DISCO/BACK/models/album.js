let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let album = new Schema({
    titulo: {
        type: String,
        requerid: true,
    },
    descripcion: {
        type: String,
        requerid: true,
        minLenght: 5,
        maxLenght: 200,
    },
    anio: {
        type: Number,
        requerid: true,
        validate: {
            validator: function(v) {
                return v > 0;
            },
            message: 'El año de lanzamiento debe ser mayor a cero.'
        }
    },
    canciones: {
        titulo: String,
        duracion: String,
    },
    portada: String,
});

module.exports = mongoose.model("albums", album);