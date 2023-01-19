function encriptar(){
    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);

    document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;
    // document.getElementById("msjEncrip").innerHTML = " ";
}