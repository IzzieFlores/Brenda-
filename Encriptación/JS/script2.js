function otrapagina() {

    var PasswordSistema = 'birf14';
    var mensajeError = 'Contraseña erronea';
    // var nombre = document.getElementById("a").value;

    // localStorage.setItem("abc", nombre);
    
    var password = document.getElementById("password").value;

    if (PasswordSistema == password) {
        // alert("Contraseña Correcta");
        document.getElementById("Error").innerHTML = " ";
        location.href="index3.html";
    

    } else {
        // alert("Contraseña Erronea");
        document.getElementById("Error").innerHTML = mensajeError;
        document.getElementById("Error").className = "alerta";
        // location.href=" ";



    }
}