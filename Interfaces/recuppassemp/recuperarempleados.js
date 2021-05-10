
window.addEventListener('load', function(e){
     document.getElementById('FormularioContra').addEventListener('submit', CapturaDatos);

})


function CapturaDatos(e){
    e.preventDefault();

let username = document.getElementById('usuarios').value;
let contrasenas = document.getElementById('contra').value;
let contrasenasNueva = document.getElementById('contraNueva').value;

JSONcontrasen(username,contrasenas,contrasenasNueva);
}

function JSONcontrasen(username, contrasenas, contrasenasNueva){
 const URLRecuperar = "http://localhost:8082/Administracion/Cabanas/Recuperar/ResetEmpleado";
    
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

function regresarindex(){
  window.location.assign("../primera/index.html");
  return false
  }
