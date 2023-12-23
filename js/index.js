
//base de datos//
const BBDD = [
    {
        usuario: "Nahuel",
        contraseña: "123asd"
    },
    {
        usuario: "Martin",
        contraseña: "123asd"
    },
    {
        usuario: "Coco",
        contraseña: "123asd"
    },
    {
        usuario: "Delfina",
        contraseña: "123asd"
    },
    {
        usuario: "Patricia",
        contraseña: "123asd"
    },
    {
        usuario: "Leonardo",
        contraseña: "123asd"
    },
    {
        usuario: "Bruno",
        contraseña: "123asd"
    },
    {
        usuario: "Gian",
        contraseña: "123asd"
    },
]

//validar si hay un usuario logueado//
function saludarSiEsValido(nombre){
    const contenedorLogin = document.querySelector("#contenedor-login");
    contenedorLogin.innerHTML = `<h2>Bienvenido ${nombre}<h2>`;

    //no se como hacer para ocultar el botón de inicio de sesión del index, me volví loco //
    const botonIniciarSesion = document.querySelector("#boton-iniciar-sesion");
    if (botonIniciarSesion) {
        botonIniciarSesion.style.display = "none";
    }

    // mostrar algo mientras lo redirecciono//
    const mensajeRedireccionando = document.createElement("p");
    mensajeRedireccionando.innerText = "Redirigiendo...";
    contenedorLogin.appendChild(mensajeRedireccionando);

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 3000);
}
// si hay un usuario lo saludo//
const esValido = JSON.parse(localStorage.getItem("user"))
if(esValido){
    saludarSiEsValido(esValido.usuario);
}
//variables guardadas//
const inputUsuario = document.querySelector("#usuario")
const inputPassword = document.querySelector("#password")
const botonLogin = document.querySelector("#boton-login")

const usuarioAIngresar = {
    usuario: '',
    password: ''
}
//evento del input usuario//
inputUsuario.addEventListener("input", (e)=>{
    usuarioAIngresar.usuario = e.target.value
})

//evento del input password//
inputPassword.addEventListener("input", (e)=>{
    usuarioAIngresar.password = e.target.value
})

// evento click//
botonLogin.addEventListener("click", (e)=>{
    const usuarioEncontrado = BBDD.find((el)=>{
        return usuarioAIngresar.usuario === el.usuario && usuarioAIngresar.password === el.contraseña
    })
    if (usuarioEncontrado) {
        const stringify = JSON.stringify({ usuario: usuarioEncontrado.usuario });
        // Almacena en el localStorage
        localStorage.setItem("user", stringify);
        // Actualiza el contenedor
        saludarSiEsValido(usuarioEncontrado.usuario);

    } else {
        alert("Usuario no encontrado. Intenta nuevamente!");
    }
});