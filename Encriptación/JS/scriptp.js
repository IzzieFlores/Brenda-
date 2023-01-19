function muestra(){
    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);

    document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;
    // document.getElementById("msjEncrip").innerHTML = " ";
}

function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);
    
    document.getElementById("msjReal").innerHTML = mensajeDesencriptado;
    // alert(mensajeDesencriptado);
}
