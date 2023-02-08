class DE {
    constructor(){
        this.DE = [];
    }

    push(item){
        this.DE.push(item);
        return this.DE;
    }

    pop(){
        return this.DE.pop();
    }

    ultimoValor(){
        return this.DE[this.DE.length -2];
    }

    longitud(){
        return this.DE.length;
    }

    mostrar(){
        console.log(this.DE);
    }
}

let luz = new DE();

console.log(luz);
console.log(luz.ultimoValor());
console.log(luz.push('Verano'));
console.log(luz.push('Invierno'));
console.log(luz.push('Otoño'));
console.log(luz.push('Primavera'));
console.log(luz.ultimoValor());
luz.mostrar();
// console.log(luz.ultimoValor());
// luz.mostrar();
// luz.pop();
// luz.mostrar();
// console.log(luz.ultimoValor());


function abcd(estaciones, día, mes){
    this._estaciones = estaciones;
    this._día = día;
    this._mes = mes;
}
// ====================
let aa = new abcd[
    ['Verano', 'Otoño', 'Invierno', 'Primavera'],
    [23],
    ['Diciembre', 'Marzo', 'Junio', 'Setiembre']   
]
console.log(aa[1][0][2]);