const getAlbumIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('album');
};

const getAlbum = async (albumId) => {
  try {
      console.log("Fetching album with id:", albumId);
      const response = await axios.get(`http://localhost:5000/albums/band/${albumId}`);
      console.log(response.data);
      const albumToUse = response.data;
      renderAlbum(albumToUse);
  } catch (error) {
    console.log(error);
      swal({
          title: 'Error!',
          text: `${error.response.data}`,
          icon: 'error',
          confirmButtonText: 'Ok'
      });
      redirect("./index.html");
  }
}
function renderAlbum(album) {
  const div = document.getElementById("view-album");

  //Mostrar titulo
  const h1 = document.createElement('h1');
  h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4', 'font-bold');
  h1.textContent = album.titulo;
  div.appendChild(h1);

  //Mostrar Portada de album
  const img = document.createElement('img')
  img.src= album.portada ? album.portada : 'https://imgur.com/0uSALUr.png'
  img.alt = `Portada de ${album.titulo}`;
  img.style.width = '250px'; // Ajusta el tamaño de la imagen según tus necesidades
  img.style.height = '250px';
  div.appendChild(img);

  //Mostrar descripcion
  const p = document.createElement('p');
  p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2');
  p.textContent = "Descripción: " + album.descripcion;
  div.appendChild(p);
  
  //Render songs
  if (album.canciones) {
    renderSongs(album); 
  }
  
  //Agregar canciones
  //const a = document.createElement("a")
  
  const redirect = (id) => { window.location.href = `./addSongs.html?album=${id}`}
  boton.addEventListener("click", () => redirect(album._id));
}

document.addEventListener('DOMContentLoaded', function() {
  const albumId = getAlbumIdFromUrl();
  console.log("Album ID from URL:", albumId);
  if (albumId) {
      getAlbum(albumId);
  }
});

function renderSongs(album) {
  const div = document.getElementById("view-album");
  const songList = document.createElement('ol');
  songList.classList.add('list-decimal', 'ml-6');

  album.canciones.forEach((cancion, index) => {
    const songItem = document.createElement('li');
    songItem.classList.add('text-white', 'flex', 'items-center', 'justify-between', 'my-2');

    const songDetails = document.createElement('span');
    songDetails.textContent = `${index + 1}. ${cancion.titulo} - ${cancion.duracion}`;
    songItem.appendChild(songDetails);

    const actions = document.createElement('div');

    const youtubeIcon = document.createElement('a');
    youtubeIcon.href = cancion.youtubeLink;
    youtubeIcon.target = '_blank';
    youtubeIcon.classList.add('ml-4');
    youtubeIcon.innerHTML = '<i class="fa fa-youtube-play text-red-500"></i>';
    actions.appendChild(youtubeIcon);

    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('ml-4', 'cursor-pointer');
    deleteIcon.innerHTML = '<i class="fa fa-trash text-red-500"></i>';
    deleteIcon.addEventListener('click', () => deleteSong(album._id, index));
    actions.appendChild(deleteIcon);

    songItem.appendChild(actions);
    songList.appendChild(songItem);
  });

  div.appendChild(songList);
}
const deleteSong = async (tituloCancion) => {
  const albumId = getAlbumIdFromUrl();

  try {
      // Obtener el álbum actual
      const album = await getAlbum(albumId);

      // Remover la canción del array de canciones
      const updatedCanciones = album.canciones.filter(cancion => cancion.titulo !== tituloCancion);

      // Hacer la solicitud PUT para actualizar el álbum
      await axios.put(`http://localhost:5000/albums/band/${albumId}/canciones`, { canciones: updatedCanciones });

      // Mostrar alerta de éxito y recargar la página
      swal("Éxito", "La canción ha sido eliminada correctamente", "success")
          .then(() => {
              window.location.reload();
          });
  } catch (error) {
      console.error(error);
      swal("Error", "No se pudo eliminar la canción", "error");
  }
};