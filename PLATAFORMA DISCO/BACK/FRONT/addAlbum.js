let boton = document.getElementById('enviarBtn');

const titulo = document.getElementById('titulo');
const anio = document.getElementById('anio');
const descripcion = document.getElementById('descripcion');
const imagen = document.getElementById('imagen');

boton.addEventListener('click', async function(e) {
    e.preventDefault();
    //const albumForm = document.getElementById('albumForm');
    try {
        // Envía los datos al backend
        const response = await axios.post("http://localhost:5000/albums/band", {
            titulo: titulo.value,
            descripcion: descripcion.value,
            anio: anio.value,
            portada: imagen.value 
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error al enviar el álbum:', error);
        
    }
});