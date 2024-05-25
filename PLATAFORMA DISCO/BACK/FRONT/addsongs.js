//---------------------------------------------PLEDU 12, OBJETOS---------------------------------------------------

/*function validateInputs(titulo, artista){
    if(titulo.trim() == '' && artista.trim() == ''){
        swal("Debes completar el titulo y el artista", { icon: "error"
        });
    }
    else if(titulo.trim() == ''){
        swal("Debes completar el titulo", { icon: "error"
        });
    }
    else if(artista.trim() == ''){
        swal("Debes completar el artista", { icon: "error"
    });
}
else{
    swal("Editaste el album correctamente");
}
}*/
const getAlbumIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('album');
};

const getAlbum = async (albumId) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/albums/band/${albumId}`);
        return data;
    } catch (error) {
        console.error(error);
        swal("Error", "No se pudo obtener la información del álbum", "error");
    }
};
let boton = document.getElementById("botonEdit")
boton.addEventListener("click", function(){
    addSong()
});
document.getElementById('botonCancel').addEventListener('click', function(){
    window.location.href = `./album.html?album=${albumId}`;
});

const addSong = async () => {
    
    const albumId = getAlbumIdFromUrl();
    const titulo = document.getElementById("title").value;
    const artista = document.getElementById("artista").value;
    const duracion = document.getElementById("duracion").value;
    const youtubeLink = document.getElementById("url").value;

    const newSong = { titulo, artista, duracion, youtubeLink };

    try {
        // Obtener el álbum actual
        const album = await getAlbum(albumId);

        // Agregar la nueva canción al array de canciones
        album.canciones = [];
        album.canciones.push(newSong);

        // Hacer la petición PUT para actualizar el álbum
        await axios.put(`http://localhost:5000/albums/band/${albumId}`, album);

        // Mostrar alerta de éxito y redirigir a la vista del álbum
        swal("Éxito", "La canción ha sido añadida correctamente", "success")
            .then(() => {
                window.location.href = `./album.html?album=${albumId}`;
            });
    } catch (error) {
        console.error(error);
        swal("Error", "No se pudo añadir la canción", "error");
    }
};
