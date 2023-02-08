// let persona = {
//     nombre: 'Brenda',
//     edad: 18,
//     carrera: 'Acrilista'
// }

// console.log(persona);

// let abcd = {
//     nombre: 'Saul',
//     edad: 24,
//     carrera: 'Desarrollo de Software',
// }

// console.log(abcd);

// let tre = {
//     nombre: 'Lizeth',
//     edad: 42,
//     carrera: 'Enfermería'
// }

// console.log(tre);



//Forma1 de crear objeto
let persona1 = {};

//Forma2 de crear objeto
let persona2 = new Object();


// ===============================
//       AÑADIR ATRIBUTOS
// ===============================
//Forma1
persona1.nombre = 'Pepito';
persona1.apellido = 'Reyes';

//Forma2
persona1["edad"] = 12;
console.log(persona1);


// ===============================
//         MOSTRAR DATOS
// ===============================
//Forma1
console.log(persona1.nombre);

//Forma2
console.log(persona1["nombre"]);



// ================================
//        ACTUALIZAR DATOS
// ================================
//Forma1
persona1.nombre = 'Brenda';
console.log(persona1);

//Forma2
persona1["nombre"] = 'Carmen';
console.log(persona1);



// ********************************


// =================================
//             PERSONA2
// =================================

persona2.nombre = 'María Fernanda';
persona2.apellido = 'Ochoa';
persona2.dni = 67340857;
persona2.edad = 18;
persona2.email = 'mafer87@gmail.com';
persona2.carrera = 'Ciencias de la Comunicación';
persona2.carrera = 'DERECHO';
console.log(persona2.email);


