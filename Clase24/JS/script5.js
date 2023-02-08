// alert("hola")
function de(){

    var nombreUsser = document.getElementById("usuario").value;
    var datosPassword = document.getElementById("passwordLo").value;
    var mensajeError = 'Error Fatal...';
    var bgfdetgsr = " ";

    if(nombreUsser == bgfdetgsr || datosPassword == bgfdetgsr){


    // localStorage.setItem("_abc", nombreUsser);
    // localStorage.setItem("_abcd", datosPassword);
    // document.getElementById("error").innerHTML = " ";

    location.href = "index.html";

    
    }else{
        // localStorage.setItem("_abc");
        // localStorage.setItem("_abcd");
        document.getElementById("error").innerHTML = mensajeError;
    }

}

