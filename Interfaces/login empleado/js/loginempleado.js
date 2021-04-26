
var username = document.getElementById("userr");
const urllog = "http://localhost:8082/Administracion/Cabanas/login/loginEmpleados"
var password = document.getElementById("passwords");
 function setempleados(){
fetch(urllog,{
  headers:{
"accept": "application/json",
"Content-Type":"application/json"
  }  ,
method:"POST",
body:JSON.stringify( 
    { 
        "User Empleado": username,
        "Password Empleado": password
})
,cache: "no-cache"

}).then(res => (res.json())
.then(res => (console.log(res)))
.catch(error => (console.log(error)))

}





