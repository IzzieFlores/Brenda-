// alert("Hello World")
function encriptar() {
    var PasswordSistema = 'birf14';
    var mensajeError = 'Contraseña erronea';

    var mensaje = document.getElementById("mensaje").value;
    var password = document.getElementById("password").value;
    // var mensajeEncriptado = document.getElementById("msjEncrip").value;

    //     // alert(mensaje + password);

    if (password == PasswordSistema) {
        // alert ("Contraseña Correcta: Ingresaste");

        document.getElementById("error").innerHTML = " ";

        var mensajeEncriptado = btoa(mensaje);
        alert(mensajeEncriptado);
        document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;

    } else {
        // alert ("Contraseña Incorrecta");
        document.getElementById("msjEncrip").innerHTML = " ";

        document.getElementById("error").innerHTML = mensajeError;
        document.getElementById("error").className = "alerta";
    }
}

// function mensaje(){
//     alert("hola");
// }
// mensaje();
function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);
    
    document.getElementById("msjReal").innerHTML = mensajeDesencriptado;
    // alert(mensajeDesencriptado);
}




