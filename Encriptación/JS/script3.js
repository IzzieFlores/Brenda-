function dev() {

    var PasswordSistema = 'birf14';
    var mensajeError = 'Contraseña erronea';
    var password = document.getElementById("password").value;

    var nombreUsser = document.getElementById("nombre").value;
   
    localStorage.setItem("abc",nombreUsser);

    if (PasswordSistema == password) {
        document.getElementById("Error").innerHTML = " ";
        location.href="index5.html";
    

    } else {
        document.getElementById("Error").innerHTML = mensajeError;
        document.getElementById("Error").className = "alerta";


    }
}
