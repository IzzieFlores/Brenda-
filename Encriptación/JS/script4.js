function muestra(){
    document.getElementById("b").innerHTML += localStorage.getItem("abc");
}
muestra(); 

function encriptar(){
    var mensaje = document.getElementById("mensaje").value;
    var mensajeEncriptado = btoa(mensaje);

    document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;
}

function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);
    
    document.getElementById("msjReal").innerHTML = mensajeDesencriptado;
}
