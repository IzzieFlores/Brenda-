// import {hola} from "./app/firebase.js"
// hola();

import { guardarTarea } from "./app/firebase";

window.addEventListener('DOMContentLoaded', ()=>{

})

let form = document.getElementById('formulario');

form.addEventListener('submit', ()=>{
    let titulo = document.getElementById('titulo');
    let descripcion = document.getElementById('descripcion');

    guardarTarea(titulo.value, descripcion.value);
})