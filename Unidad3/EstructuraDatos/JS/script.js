//Ejemplo Pila
// class Pila{
    //Creamos constructor
    // constructor(){
        // this.Pila = [];
    // }
    //agregar un elemento al final del array
    // push(item){
        // this.Pila.push(item);
        // return this.Pila;
    // }
    //Metodo para eliminar elemento
    // pop(){
        // return this.Pila.pop();
    // }
    //Metodo que retorne el ultimo valor ingresado
    // ultimoValor(){
        // return this.Pila[this.Pila.length -1];
    // }
    //Metodo que retorna el cantidad de elementos del array
    // longitud(){
        // return this.Pila.length;
    // }
    //Muestre el contenido del array en la consola
    // mostrar(){
        // console.log(this.Pila);
    // }
// }


// let abc = new Pila();
// console.log(abc);
// console.log(abc.longitud());
// console.log(abc.push('Naranja'));
// console.log(abc.push('Manzana'));
// console.log(abc.longitud());
// abc.mostrar();



// ===============================
//          EJEMPLO COLA
// ===============================

// class Cola{
//     constructor(){
//         this.cola = [];
//     }

//     agregar(valor){
//         this.cola.push(valor);
//         return this.cola;
//     }

//     eliminar(){
//         return this.cola.pop();
//     }

//     longitud(){
//         return this.cola.length;
//     }

//     vacio(){
//         return this.cola.length == 0;
//     }

//     mostrar(){
//         console.log(this.cola); 
//     }
// }

// let prueba = new Cola();
// prueba.agregar('rojo');
// prueba.agregar('verde');
// prueba.agregar('azul');
// prueba.agregar('amarillo');
// prueba.agregar('negro');
// prueba.mostrar();

// prueba.eliminar();
// prueba.mostrar();

// console.log(prueba.longitud());
// console.log(prueba.vacio());

// ============================================
//             EJEMPLO MATRICES
// ============================================

// let matriz1 = [20, 'okay', 1, 2, 'Karla', 45];
// console.log(matriz1[3]);
// console.log(matriz1.length);
// matriz1.pop();
// matriz1.push('otro numero');
// matriz1.push(98);
// console.log(matriz1);
// matriz1.push('otra letra');
// matriz1.push('l')
// console.log(matriz1);
// matriz1.pop(-2);
// console.log(matriz1);
// console.log(test[1]);
// console.log(test.length);
// test.push('otro numero');
// test.push(9);
// console.log(test);
// test.pop();
// console.log(test);


// =========================
//       EJEMPLO ARBOL
// =========================

class arbol{
    constructor(node){
        this._node = node;
        this._array = [];
    }
}

let a = new arbol(1000000);

let b = new arbol(99);

let c = new arbol(100);
// c._array.push('Mayonesa');
let d = new arbol(676);
// d._array.push('AA');
let e = new arbol(2);
// e._array.push(55);

a._array.push(b);
b._array.push(c, d, e);
console.log(a);
console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);