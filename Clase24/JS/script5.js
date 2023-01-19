// alert("hola")
function de(){
    
    var nombreUsser = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("_abc", nombreUsser);
    localStorage.setItem("_abcd", password);

    location.href = "index.html"

}