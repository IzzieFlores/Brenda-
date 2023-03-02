$(document).ready(function () {

    const firebaseConfig = {
        apiKey: "AIzaSyCD9XclKrRqdbvTdki8hdHAP7q8rbAGiuI",
        authDomain: "login-f31f1.firebaseapp.com",
        projectId: "login-f31f1",
        storageBucket: "login-f31f1.appspot.com",
        messagingSenderId: "524541020601",
        appId: "1:524541020601:web:b4dbf9ca5328a52ae84e68",
        measurementId: "G-NLW8LC3R33"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    console.log(app);

    //**********Registrar Usuarios*************//
    //Seleccionando el boton registrar
    $("#btn-register").click(function () {
        //Capturar el Email y el Password
        let username = $("#userName").val();
        let password1 = $("#password").val();

        //  console.log(username, password1); //comprobamos si captura datos


        //Método de firebase que registra usuarios
        firebase.auth().createUserWithEmailAndPassword(username, password1)
            .then((userCredential) => {
                // Signed in

                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'Creaste tu cuenta exitosamente',
                    confirmButtonText: 'ok',
                    allowOutsideClick: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "indexcopia.html";
                    }
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocurrio un error al crear tu cuenta',
                })
            });

    });





    //Ingresar con nuestro correo registrado
    $("#btn-login").click(function () {

        //Capturar el Email y el Password
        let username = $("#userName").val();
        let password1 = $("#password").val();


        firebase.auth().signInWithEmailAndPassword(username, password1)
            .then((userCredential) => {
                // Signed in

                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: '¿Estás seguro que quieres ir a la siguiente página?',
                    confirmButtonText: 'Yes',
                    allowOutsideClick: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "mi-login.html";
                    }
                })
                // ...

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo iniciar sesión',
                })
            });
    });

    //Cerrar Sesión
    $("#btn-salir").click(function () {

        firebase.auth().signOut().then(() => {

            Swal.fire({
                title: '¡Alerta!',
                text: "Seguro que quieres cerrar sesión?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href= "indexcopia.html"
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
           

        })
      
    });
})

