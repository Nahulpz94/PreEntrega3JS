document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y el botón de envío
    const formularioContacto = document.getElementById("form-contacto");
    const botonEnviar = document.getElementById("submit-button");

    // Evento de envío del formulario
    formularioContacto.addEventListener("submit", function(e) {
        e.preventDefault(); // Evitar que se envíe el formulario por defecto

        // Almacenar los mensajes existentes o inicializar un array vacío
        const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];

        // Obtener los valores de los campos del formulario
        const nombre = formularioContacto.querySelector("#nombre-form").value;
        const email = formularioContacto.querySelector("#email-form").value;
        const mensaje = formularioContacto.querySelector("#mensaje-form").value;

        // Crear un objeto con los datos del formulario
        const nuevoMensaje = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };

        // Agregar el nuevo mensaje al array
        mensajesGuardados.push(nuevoMensaje);

        // Almacenar el array de mensajes en el localStorage
        localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados));

        // Mensaje enviado
        alert("Mensaje enviado correctamente. Gracias por tu opinión!");

        // vaciar el formulario una vez enviado
        formularioContacto.reset();
    });
});
