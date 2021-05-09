window.addEventListener('load', function(e){
    document.getElementById('LoginAdmin').addEventListener('submit',enviodedatosfuncion);
    });
    
    function enviodedatosfuncion(e)
    {
    e.preventDefault();
    let usuario = document.getElementById('userAdmin').value;   
    let password= document.getElementById('passAdmin').value;
    JSONForm(usuario,password);
    
    return false;
    }
    
    
    function JSONForm(name, passwords){
      const urllog = "http://localhost:8082/Administracion/Cabanas/LoginAdmin";
    let JSONs = {
        user_admin: name,
        password_admin:passwords
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
    }).then(res => (res.text()) //Redirreccione al panel. redireccionar window JS
    .then(res => (console.log(res))))
    .catch(error => (console.log(error))) // INNER HTML  USUARIO O CONTRASEÑA INCORRECTOS. Document. INNERHTML 
    
    }