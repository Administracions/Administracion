
window.addEventListener('load', function(e){
    document.getElementById('FormularioAdmin').addEventListener('submit', CapturaDatos);

})


function CapturaDatos(e){
   e.preventDefault();

let username = document.getElementById('UserAdmin').value;
let contrasenas = document.getElementById('PassAdmin').value;
let contrasenasNueva = document.getElementById('PassAdminRe').value;

JSONcontrasen(username,contrasenas,contrasenasNueva);
}

function JSONcontrasen(username, contrasenas, contrasenasNueva){
const URLRecuperar = " http://localhost:8082/Administracion/Cabanas/Recuperar/ResetAdministrador";
   
let JSONContrasena={
contrasena: contrasenas,
confirmar_contrasena: contrasenasNueva
}
fetch(URLRecuperar +"/" +username, {
 mode:"cors",
 headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
 method: 'POST', 
 body: JSON.stringify(JSONContrasena)
}).then(res => (res.text())    // SI RESPONDE BIEN, DIGA UN LETRERO CON INNER HTML  "Contraseña restablecida con exito"
.then(res => (console.log(res))))
.catch(error => (console.log(error))); // SI RESPONDE MAL, DIGA UN LETRERO  "Usuario no encontrado, por favor intente de nuevo" igual con INNER HTML  
}
