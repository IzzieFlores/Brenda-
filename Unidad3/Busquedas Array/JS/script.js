// Aplicando lo aprendido1
// ===========IndexOf===========

// let array = [2, 9, 5, 2];
// console.log(array.indexOf(5));

// console.log(array.indexOf(0));


// Aplicando lo aprendido2
// ===========LastIndexOf===========

// let array = [2, 9, 5, 2];
// console.log(array.lastIndexOf(2, 2));
// console.log(array.lastIndexOf(2, 3));
// console.log(array.lastIndexOf(2, -1));


// Aplicando lo aprendido3
// ===========Includes===========

// let array = [1, 2, NaN];
// console.log(array.includes(3, 3));
// console.log(array.includes(3, -1));
// console.log(array.includes(2));
// console.log(array.includes(4));
// console.log(array.includes(NaN));
// console.log(array.includes(3, '8'));



// Aplicando lo aprendido4
// ===========Find===========

// function nombre(c, b){

//     alert(c + b);

// }
// nombre(5, 7);

// function dev(element, index, array){
//     let i = 2;
//     while(i <= Math.sqrt(element)){
//         if (element % i++ <1){
//             return false;
//         }
//     }
//     return element > 1;
// }

// console.log([4, 5, 8, 12].find(dev));

let array = [5, 8, 13, 21, 34];
function buscar(item){
    return item > 20;
}

let item = array.find(a=> a>20)
console.log(item);


// Aplicando lo aprendido5
// ===========Filter===========

function mayor(a){
    return a >= 10;
}

let filtrado = [12, 5, 8, 130, 44].filter(mayor);
console.log(filtrado);
