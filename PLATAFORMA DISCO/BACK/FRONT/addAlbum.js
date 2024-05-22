document.addEventListener('DOMContentLoaded', function() {
    const albumForm = document.getElementById('albumForm');
    albumForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Captura los valores de los campos del formulario
        const titulo = document.getElementById('titulo').value;
        const anio = document.getElementById('anio').value;
        const descripcion = document.getElementById('descripcion').value;
        const imagen = document.getElementById('imagen').value;

        try {
            // Envía los datos al backend
            const response = await axios.post('/band', {
                titulo,
                anio,
                descripcion,
                portada: imagen // Suponiendo que 'portada' es el nombre del campo en tu modelo de álbum
            });

            console.log(response.data); // Muestra la respuesta del servidor en la consola
            // Podrías mostrar un mensaje de éxito al usuario o redirigirlo a otra página
        } catch (error) {
            console.error('Error al enviar el álbum:', error);
            // Podrías mostrar un mensaje de error al usuario
        }
    });
});