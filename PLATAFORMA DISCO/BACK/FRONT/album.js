const getAlbumIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('album');
};
document.addEventListener('DOMContentLoaded', function() {
    const albumId = getAlbumIdFromUrl();
    if (albumId) {
      getAlbum(albumId);
    } else {
      swal({
        title: 'Error!',
        text: 'No se ha encontrado el ID del álbum en la URL',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      redirect('./index.html');
    }
});

const getAlbum = async () =>{
    try{
      const response = await axios.get("http://localhost:5000/albums/band/:id")
      albumToUse = response.data;
      renderAlbum(albumToUse);
    }
    catch(error){
      swal({
        title: 'Error!',
        text: `${error.response.data}`,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      redirect("./index.html")
    }
}

function renderAlbum(album){
    const div = document.getElementById("view-album")
    const h1 = document.createElement('h1')
    h1.classList.add('text-white', 'text-5xl', 'mt-20', 'mb-4', 'ml-4','font-bold')
    h1.textContent= album.titulo
    div.appendChild(h1)
    const p = document.createElement('p')
    p.classList.add('text-white', 'mb-4', 'ml-4', 'w-1/2')
    p.textContent= album.descripcion
    div.appendChild(p)
}
