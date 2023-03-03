// export function hola(){
//     console.log('Hola este mensaje es desde el archivo de firebase.js');
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

import {
    getFirestore, //conexión a la base de datos
    collection,  //crear datos
    addDocs
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log(app);
// INICIAR GETFIRESTORE
const db = getFirestore();

export const guardarTarea = (titulo, descrip) => {
    addDocs(collection(db, "tareas"), {
        _title: titulo,
        _descripcion: descrip
    });
    console.log('se agrego una tarea');
} 