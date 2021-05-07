
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

const cookie = setCokkie("UserName", username);
console.log(cookie);
fetch(URLRecuperar, {
    mode: "no-cors",
    headers:{
  "accept": "application/json",
  "Content-Type":"application/json",
  "Cookie" : cookie
    },
  method:"POST",
  cache:"no-store",
  credentials: "include",
  body : JSON.stringify(JSONContrasena)

}).then(res => (res.text())
.then(res => (console.log(res))))
.catch(error => (console.log(error)));
}
function setCokkie(name, value){
var date = new Date();
let cokkk = document.cookie = name + "=" + value; 
return cokkk;
}