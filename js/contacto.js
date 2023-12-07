document.addEventListener("DOMContentLoaded", function() {
    // obtener el formulario y el botón de envío
    const formularioContacto = document.getElementById("form-contacto");
    const botonEnviar = document.getElementById("submit-button");

    // evento de envío del formulario //
    formularioContacto.addEventListener("submit", function(e) {
        e.preventDefault(); // evita que se envíe el formulario por defecto

        // almacenar los mensajes existentes o inicializar un array vacío
        const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];

        // obtener los valores de los campos del form //
        const nombre = formularioContacto.querySelector("#nombre-form").value;
        const email = formularioContacto.querySelector("#email-form").value;
        const mensaje = formularioContacto.querySelector("#mensaje-form").value;

        // crear un objeto con los datos del form //
        const nuevoMensaje = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };

        // agregar nuevo mensaje al array //
        mensajesGuardados.push(nuevoMensaje);

        // almacenar array de mensajes en localStorage //
        localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados));

        // mensaje enviado //
        alert("Mensaje enviado correctamente. Gracias por tu opinión!");

        // vaciar el formulario una vez enviado //
        formularioContacto.reset();
    });
});
