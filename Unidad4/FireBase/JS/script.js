$(document).ready(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyDLWOvWwBfbL6gtExqNEpxUjvJ9fsf4sE4",
        authDomain: "unidad-4-84411.firebaseapp.com",
        projectId: "unidad-4-84411",
        storageBucket: "unidad-4-84411.appspot.com",
        messagingSenderId: "733582304281",
        appId: "1:733582304281:web:122678d8a4065251cff688",
        measurementId: "G-8542QNRL5Z"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    console.log(app);

    //**********Registrar Usuarios*************//
    //Seleccionando el boton registrar
    $("#btn-registrar").click(function () {
        //Capturar el Email y el Password
        let email = $("#email").val();
        let password = $("#password").val();

        //  console.log(email, password); //comprobamos si captura datos


        //Método de firebase que registra usuarios
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in

                alert('Creaste una cuenta exitosamente');
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
                alert('Ocurrio un error al crear tu cuenta');

            });

    });





    //Ingresar con nuestro correo registrado
    $("#btn-iniciar").click(function () {

         //Capturar el Email y el Password
         let email = $("#email").val();
         let password = $("#password").val();
 

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // alert("Ingresaste");
                // ...
                window.location.href = "home.html" 
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);

                alert("No se pudo iniciar sesión");
            });
    });

    //Cerrar Sesión
    $("#salir").click(function(){
        
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            window.location.href = "index.html"
          })
    });
    
});