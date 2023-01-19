function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);
    
    document.getElementById("msjReal").innerHTML = mensajeDesencriptado;
    // alert(mensajeDesencriptado);
}
