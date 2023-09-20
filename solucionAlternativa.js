// Calcular si un numero es par o impar
const esPar = (valor = 0) => {
    return (valor % 2 === 0) ? `El numero ${valor} es par` : `El numero ${valor} es Impar`;
};
//console.log(esPar(20));

//calcular si un numero dado es primo
const esPrimo = (numero) => {
    if(typeof numero !== "number") throw TypeError('El argumento debe ser un numero');

    if(!Number.isInteger(numero)) throw TypeError('El argumento debe ser un numero entero');

    if(numero <= 1) throw TypeError('El argumento debe ser un numero entero positivo');

    let raiz = Math.floor(Math.sqrt(numero)) + 1;

    for(let i = 2; i < raiz; ++i){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}

try {
    //console.log((esPrimo(7)));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

// Calcular el factorial de un numero dado
const factorialRecursivo = (n) => {
    if(n === 0){
        return 1;
    }else{
        return n * factorialRecursivo(n - 1);
    }
};
//console.log(factorialRecursivo(5));

// Codigo de Youtube "Funciona correctamente"
/*
    var num = parseFloat(prompt("Ingresa un numero"));
    var total = 1;
    for(var i = 1; i <= num; i++){
        total = total * i;
    }
    alert(`El factorial del numero ${num} es: ${total}`);
    */

// Convertir Binario a decimal y viceversa Funciona correctamente
const convertirBinarioADecimal = (binario) => {
    if(binario.constructor !== String){
        return null;
    }
    binario = binario.replace(/[^01]/gi, '');
    return Number.parseInt(binario, 2);
};
convertirBinarioADecimal("1001");
convertirBinarioADecimal('1111')




