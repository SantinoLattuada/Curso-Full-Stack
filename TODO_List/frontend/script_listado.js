//Hacer una peticion al servidor por GET y la respuesta del servidor la mostramos en el div

axios.get("http://localhost:3000/tareas").then(function(respuesta){
    console.log(respuesta.data);
});