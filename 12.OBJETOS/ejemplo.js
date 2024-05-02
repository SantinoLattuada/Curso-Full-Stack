//Crear objeto

//Lleva clave : valor
let usuario = {
    nombre: "Emiliano",
    telefono: 123123123,
    email: "mengano@gmail.com",
    nacionalidad : "Argentino"
};

//Mostrar con array
let miArray = ["Rojo", "Azul", "Verde"];
console.log(miArray[2]);

//Doy notation
console.log(usuario.telefono);

//Corchetes
console.log(usuario["telefono"]);

//Para acceder a una propiedad:
usuario.telefono;

//Agregar y/o modificar una propiedad:
usuario.colorOjos = "Marrones";