

window.addEventListener('load', function(e){
document.getElementById('InicioSesions').addEventListener('submit',enviodedatosfuncion);
});

function enviodedatosfuncion(e)
{
e.preventDefault();
let usuario = document.getElementById('userr').value;   
let password= document.getElementById('passwords').value;
JSONForm(usuario,password);

return false;
}


function JSONForm(name, passwords){
  const urllog = "http://localhost:8082/Administracion/Cabanas/login/loginEmpleados";
let JSONs = {
  user: name,
  password: passwords
}

fetch(urllog,{
  mode:"cors",
  headers:{
"accept": "application/json",
"Content-Type":"application/json"
  },
method:"POST",
body:JSON.stringify(JSONs)
,
cache: "no-cache"
}).then(res => (res.text()))
.then(res => (console.log(res)))
.catch(error => (console.log(error)))

}




