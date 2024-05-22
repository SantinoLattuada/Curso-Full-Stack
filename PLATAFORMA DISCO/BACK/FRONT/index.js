document.addEventListener('DOMContentLoaded', function() {
    getAlbums();
});

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
    const container = document.getElementById('albums-container');
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
}