//Capturar el evento click del boton y los datos ingresados
let btn = document.getElementById("guardar");
let dato_titulo = document.getElementById("titulo");
let dato_desc = document.getElementById("descripcion");

let parrafo_resp = document.getElementById("respuesta");

//Evento click
btn.addEventListener("click", function(){
    //Llamar al servidor y enviar los datos por POST
    axios.post("http://localhost:3000/tarea", {
        titulo: dato_titulo.value,
        descripcion: dato_desc.value
    }).then(function (respuesta){
        parrafo_resp.innerText = respuesta;
    });
});