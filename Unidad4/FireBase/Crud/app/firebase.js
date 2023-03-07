import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

import {
  getFirestore, //servicios de firestore
  collection, //se crea la base de datos
  addDoc, //añadir datos
  getDocs, //traer datos
  onSnapshot //Tiempo real
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//Cambiar por sus credenciales de Firebase
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
const analytics = getAnalytics(app);



//Iniciar la base de datos de Firebase
const db = getFirestore(app);

export const GuardarTarea = (titulo, descripcion) => {
  addDoc(collection(db, "tareas"), {
    _titulo: titulo,
    _descripcion: descripcion,
  });
  console.log("se agrego la tarea exitosamente");
};


export const ListarTareas = () => getDocs(collection(db,"tareas"));
// console.log('listamos las tareas');

export const OnListarTareas = (callback) => onSnapshot(collection(db,"tareas"),callback)