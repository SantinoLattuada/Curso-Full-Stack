let boton = document.getElementById("enviarBtn");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contrasenia = document.getElementById("contrasenia");

boton.addEventListener("click", async function(e){
    e.preventDefault();
    try {
        // Envía los datos al backend
        const response = await axios.post("http://localhost:5000/users/user", {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            contrasenia: contrasenia.value 
        });
        console.log(response.data);
        alert('Usuario registrado con éxito');
        // Redirigir a la página de inicio de sesión después del registro exitoso
        window.location.href = "./login.html?";
    } catch (error) {
        console.error('Error al registrar al usuario:', error);
        alert('Error al registrar el usuario');
    }
    window.location.reload();
    
})