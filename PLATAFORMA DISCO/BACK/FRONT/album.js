const getAlbumIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('album');
};

const getAlbum = async (albumId) => {
  try {
      console.log("Fetching album with id:", albumId);
      const response = await axios.get(`http://localhost:5000/albums/band/${albumId}`);
      console.log(response);
      const albumToUse = response.data;
      renderAlbum(albumToUse);
  } catch (error) {
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
  p.textContent = "Descripción:" + album.descripcion;
  div.appendChild(p);
  
  //Render songs
  const songList = document.createElement('ol');
  album.canciones.forEach(cancion => {
    const songItem = document.createElement('li');
    songItem.classList.add('text-white');
    songItem.textContent = `${cancion.titulo} - ${cancion.duracion}`;
    songList.appendChild(songItem);
  });
  div.appendChild(songList);
}

document.addEventListener('DOMContentLoaded', function() {
  const albumId = getAlbumIdFromUrl();
  console.log("Album ID from URL:", albumId);
  if (albumId) {
      getAlbum(albumId);
  }
});
