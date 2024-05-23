document.addEventListener('DOMContentLoaded', function() {
    getAlbums();
});

const getAlbums =  async () => {
    try{
    const response = await axios.get('http://localhost:5000/albums/band')
    response.data.map((album)=> {
      renderAlbums(album)})
    }
    catch(error){
      // Aviso de error al cargar los albums
    }
  }
  const renderAlbums = (album) => {
    console.log(album);
    const div = document.getElementsByClassName('songs')[0]
    const newDiv = document.createElement('div')
    newDiv.classList.add('mb-20')
    const img = document.createElement('img')
    img.classList.add('rounded','cursor-pointer')
    img.style.width = '250px'; // Establecer ancho en 250px
    img.style.height = '250px'; // Establecer alto en 250px
    img.src= album.portada ? album.portada : 'https://imgur.com/0uSALUr.png'
    const h2 = document.createElement("h2");
    h2.textContent = album.titulo;
    const a = document.createElement("a");
    a.href = "http://localhost:5000/albums/band/" + album._id;
    const redirect = (id) => { window.location.href = `./album.html?album=${id}`}
    img.addEventListener('click', () => redirect(album._id));
    a.text = album.titulo ? album.titulo : 'Disco';

    div.appendChild(newDiv)
    newDiv.appendChild(a);
    newDiv.appendChild(img)
    const p = document.createElement('p')
    p.classList.add('text-white','text-center', 'text-xl', 'font-bold')
    p.textContent = album.anio
    newDiv.appendChild(p)
  }













/*
const getAlbums = async () => {
    try {
        const response = await axios.get('http://localhost:5000/albums/band');
        const container = document.getElementById("songs");
        container.innerHTML = ''; // Limpiar el contenedor antes de agregar los álbumes dinámicos

        response.data.forEach(album => {
            renderAlbums(album);
        });
    } catch (error) {
        console.error('Error fetching albums:', error);
        swal("Error", "No se pudo obtener la lista de álbumes", "error");
    }
}

const renderAlbums = (album) => {
    const container = document.getElementById("songs");
    const albumDiv = document.createElement('div');
    albumDiv.classList.add('mb-20');

    const img = document.createElement('img');
    img.classList.add('rounded', 'cursor-pointer');
    img.src = album.img ? album.img : 'https://imgur.com/0uSALUr.png';
    img.alt = album.title;

    img.addEventListener('click', () => redirect(album._id));

    albumDiv.appendChild(img);

    const title = document.createElement('p');
    title.classList.add('text-white', 'text-center', 'text-xl', 'font-bold');
    title.textContent = album.title || 'Untitled';

    const year = document.createElement('p');
    year.classList.add('text-white', 'text-center');
    year.textContent = album.yearOfRelease || 'Unknown year';

    albumDiv.appendChild(title);
    albumDiv.appendChild(year);

    container.appendChild(albumDiv);
}

const redirect = (id) => {
    window.location.href = `./album.html?album=${id}`;
} */