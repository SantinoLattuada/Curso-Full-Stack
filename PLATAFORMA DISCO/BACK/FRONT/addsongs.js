//---------------------------------------------PLEDU 12, OBJETOS---------------------------------------------------

function validateInputs(titulo, artista){
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
}

let boton = document.getElementById("botonEdit");

boton.addEventListener("click", function(){
    let titulo = document.getElementById("title").value;
    let artista = document.getElementById("artista").value;

    validateInputs(titulo, artista);
});