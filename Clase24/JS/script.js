function otrapagina() {

    var PasswordSistema = localStorage.getItem("_abcd");
    var usuario = localStorage.getItem("_abc");
   
    var password = document.getElementById("password").value;
    var nombreUsser = document.getElementById("nombre").value;

    var mensajeError = 'Contraseña erronea';
   
    localStorage.setItem("abc", nombreUsser);
    
    if (PasswordSistema == password && usuario == nombreUsser) {
        location.href="index2.html";

        document.getElementById("Error").innerHTML = " ";

    } else {
    
        document.getElementById("Error").innerHTML = mensajeError;
        document.getElementById("Error").className = "alerta";
        
    }
}