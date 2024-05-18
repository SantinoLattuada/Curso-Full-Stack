//---------------------------------------------PLEDU 12, OBJETOS---------------------------------------------------

function validateInputs(titulo, descripcion){
    if(titulo.trim() == '' && descripcion.trim() == ''){
        swal("Debes completar el titulo y la descripción", { icon: "error"
        });
    }
    else if(titulo.trim() == ''){
        swal("Debes completar el titulo", { icon: "error"
        });
    }
    else if(descripcion.trim() == ''){
        swal("Debes completar la descripción", { icon: "error"
        });
    }
    else{
        swal("Editaste el album correctamente");
    }
}

let boton = document.getElementById("botonEdit");

boton.addEventListener("click", function(){
    let titulo = document.getElementById("title").value;
    let descripcion = document.getElementById("description").value;

    validateInputs(titulo, descripcion);
})