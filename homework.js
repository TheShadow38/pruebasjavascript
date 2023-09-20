/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, 
por ejemplo. miFuncion("Hola Mundo") devolverá 10.
*/

// Solucion con una funcion declarada.
/*
function contarCaracteres(cadena = ""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    } else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
};
contarCaracteres("Hola Mundo");
*/

// Solucion con una funcion expresada (guardada en una variable) o Arrow function
const contarCaracteres = (cadena = "") => 
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena")
            : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

//contarCaracteres("");

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
const recortarCadena = (cadena = "", longitud = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena")
            : (longitud === undefined)
                ? console.warn("No ingresaste la longitud para recortar la cadena")
                    : console.info(cadena.slice(0, longitud));

//recortarCadena("Hola Mundo", 4);
//recortarCadena("", 5);
//recortarCadena("Hola Hola");

/*
3) Programa una función que dada una String te devuelva un Array de textos separados 
por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
const cadenaAArreglo = (cadena = "", separador = undefined) =>
(!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : (separador === undefined)
    ? console.warn("No ingresaste el caracter separador")
    :   console.info(cadena.split(separador));

//cadenaAArreglo();
//cadenaAArreglo("Hola Mundo");
//cadenaAArreglo("Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo", "," )

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
const repetirTexto = (texto ="", veces = undefined) => {
    if(!texto) return console.warn("No ingresaste un texto valido");
    if(veces === undefined) return console.warn("No ingresaste el repetidor de texto");
    if(veces === 0) return console.error("El repetidor de texto no puede ser 0");
    if(Math.sign(veces) === -1) return console.error("El numero de veces No puede ser negativo");

    for (let i = 1; i <= veces; i++) {
        console.info(`${texto}, ${i}`);
    }
};

//repetirTexto("Hola Mundo", 2);
//repetirTexto("Hola Mundo");
//repetirTexto("Hola Mundo", 0);
//repetirTexto("");
//repetirTexto("Hola Mundo", -20);

/*
5) Programa una función que invierta las palabras de una cadena de texto, por ejemplo. miFuncion("Hola Mundo") 
devolverá "odnuM aloH".
*/
function espejo(cadena = ""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    } else{
        console.info(cadena.split("").reverse().join(""));
    }
};
//espejo("Hola Mundo");
//console.log("");
//espejo();

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
por ejemplo. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

function contarPalabra(palabra ="", texto ="" ){
    if(!palabra) console.warn('No ingresaste ninguna palabra');
    if(!texto) console.warn('No ingresaste ningun texto a evaluar');

    let i = 0;
    contador = 0;

    while(i !== -1){
        i = palabra.indexOf(texto, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`El texto ${palabra} se repite ${contador} veces`);
};

//contarPalabra()
//contarPalabra("", "mundo");
//contarPalabra("Hola mundo adios mundo","mundo");

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
function palindrome (palabra =""){
    if(typeof palabra === "number") return console.error("No se admiten numeros");
    if(!palabra) return console.warn('No ingresaste una palabra valida');
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    if(palabra === alReves){
        console.info(`Sí, es palindromo, Palabra Original ${palabra}, Palabra al reves: ${alReves}`);
    } else{
        console.info(`No es palindromo, Palabra Original ${palabra}, Palabra al reves: ${alReves}`)
    }
    // ..................RETURN DE JON MIRCHA "Funciona correctamente"..............................
    //return (palabra === alReves)
    //? console.info(`Sí, es palindromo, Palabra Original ${palabra}, Palabra al reves: ${alReves}`)
    //: console.info(`No es palindromo, Palabra Original ${palabra}, Palabra al reves: ${alReves}`)
};

//palindrome();
//palindrome("salas");
//palindrome("mily");

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
por ejemplo. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
// ------------------ Codigo de Jon Mircha ---------------------------------
const eliminarCaracteres = (texto ="", patron = "") =>
(!texto)
? console.warn("No ingresaste un texto")
: (!patron)
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""))

//eliminarCaracteres();
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
*/

function eliminarletras (texto ="", letras =""){
    if(!texto){
        console.error("Texto no existente");
    }
    if(!letras){
        console.error("No has ingresado una letra valida");
    }else{
        console.info(texto.replace(new RegExp(letras, "ig"), ""));
    }
};

//eliminarletras();
//eliminarletras("xyz1, xyz2, xyz3, xyz4 y xyz5");
//eliminarletras("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

//  9)Programa una función que obtenga un numero aleatorio entre 501 y 600.
function generarNumeroAleatorio (){
    return console.info(Math.round((Math.random() * 100) + 500));
}
//generarNumeroAleatorio();
const aleatorio = () => console.info(Math.floor((Math.random() * 100) + 500));
//aleatorio(); // codigo de Jhon Mircha

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro)
por ejemplo. miFuncion(2002) devolverá true.
*/
function capicua (numero = 0){
    if(!numero) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`);
    
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    if(numero === alReves){
        console.info(`Sí, es Capicua, Numero Original ${numero}, Numero al reves: ${alReves}`);
    } else{
        console.info(`No es Capicua, Numero Original ${numero}, Numero al reves: ${alReves}`)
    }
};

//capicua();
//capicua(21);
//capicua("21");
//capicua(525);

/*
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define 
como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
function factorial(numero = undefined){
    if(numero === undefined) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`);
    if(numero === 0) return console.error("El numero no puede ser 0 (cero)");
    if(Math.sign(numero) === -1) return console.error("El numero NO puede ser Negativo");

    let factorial = 1;
    for(let i = numero; i > 1; i--){
        factorial *= i;
    }
    return console.info(`El factorial de ${numero} es: ${factorial}`);
};
//factorial();
//factorial("10");
//factorial(0);
//factorial(-5);
//factorial(4);

/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
por ejemplo. miFuncion(7) devolverá true.
*/
function numeroPrimo (numero = undefined){

    if(numero === undefined) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`);

    if(numero === 0) return console.error("El numero no puede ser 0 (cero)");

    if(numero === 1) return console.error("El numero no puede ser 1 (uno)");

    if(Math.sign(numero) === -1) return console.error("El numero NO puede ser Negativo");

    let divisible = false;
    for(let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        }
    }
    if(divisible === true){
        console.info(`El numero ${numero} No es primo`);
    }else{
        console.info(`El numero ${numero} ES primo`);
    }

    // ------------------ Return de Jon Mircha Funciona correctamente--------------------------
    //return(divisible)
    //? console.info(`El numero ${numero} No es primo`)
    //: console.info(`El numero ${numero} ES primo`);
};
//numeroPrimo();
//numeroPrimo("200");
//numeroPrimo(0);
//numeroPrimo(1);
//numeroPrimo(true);
//numeroPrimo(-13);
//numeroPrimo(10);

//13) Programa una función que determine si un número es par o impar, por ejemplo. miFuncion(29) devolverá Impar.
function parImpar(numero = undefined){
    if(numero === undefined) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`);
    
    if((numero % 2) === 0){
        console.info(`El numero ${numero} es par`);
    }else{
        console.info(`El numero ${numero} NO es par`);
    }
    // ------------------ Return de Jon Mircha Funciona correctamente ---------------------------
   //return ((numero % 2) === 0)
   //? console.info(`El numero ${numero} es par`)
   //: console.info(`El numero ${numero} NO es par`);
};
//parImpar();
//parImpar("21");
//parImpar();

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, por ejemplo. 
//    miFuncion(0,"C") devolverá 32°F.
function convertirGrados(grados = undefined, unidad = undefined){
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");

    if(typeof grados !== "number") return console.error(`El valor ${grados} NO es un numero valido`);

    if(unidad === undefined) return console.warn("No ingresaste el tipo de grados a convertir");

    if(typeof unidad !== "string") return console.error(`El valor ${unidad} NO es una letra`);

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad No reconocido");
    
    if(unidad === "C"){
        return console.info(`${grados}°C = ${(Math.round(grados * (9/5))) + 32}°F`);
    }else if (unidad === "F"){
        return console.info(`${grados}°F = ${(Math.round((grados - 32) * (5/9)))}°C`);
    }

};
//convertirGrados();
//convertirGrados("4");
//convertirGrados(4);
//convertirGrados(4, true);
//convertirGrados(100, "C");
//convertirGrados(100, "F")

/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, por ejemplo. 
miFuncion(100,2) devolverá 4 base 10.
*/
function convertirBinarioADecimal (numero = undefined, base = undefined){
    if(numero === undefined) return console.warn("No ingresaste el numero a convertir");

    if(typeof numero !== "number") return console.error(`El valor ${numero} Ingresado "NO" es un numero valido`);

    if(base === undefined) return console.warn("No ingresaste la base a convertir");

    if(typeof base !== "number") return console.error(`El valor ${base} NO es un numero`);

    if(base === 2){
        return console.info(`El numero ${numero} en base ${base} es igual a: ${parseInt(numero, base)} en base 10`);
    }else if (base === 10){
        return console.info(`El numero ${numero} en base ${base} es igual a: ${(numero.toString(base))} en base 2`);
    }else{
        return console.error("El tipo de base a convertir NO es valido")
    }
};
//convertirBinarioADecimal(1110010, 2);
//convertirBinarioADecimal(100, 2);
//convertirBinarioADecimal(4, 10);
//convertirBinarioADecimal(114, 10)

/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
por ejemplo. miFuncion(1000, 20) devolverá 800.
*/
function aplicarDescuento(monto = undefined, descuento = 0){
    if(monto === undefined) return console.warn("No ingresaste el monto");

    if(typeof monto !== "number") return console.error(`El valor del monto ${monto} Ingresado NO es un numero valido`);

    if(monto === 0) return console.error(`El monto ${monto} no puede ser 0 "cero"`);

    if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

    if(typeof descuento !== "number") return console.error(`El valor del descuento ${descuento} ingresado NO es un numero valido`);

    if(Math.sign(descuento) === -1) return console.warn("El descuento no puede ser negativo");
    return console.info(`${monto} - ${descuento}% Tu descuento es: ${monto - ((monto * descuento) / 100)}`);
    //let result = monto - ((monto * descuento) / 100);
    /*
    else if(result = monto - ((monto * descuento) / 100)){
        return console.info(`Tu descuento es: ${result}`);
    }else{
        return console.info(`No obtuviste descuento debes pagar: ${monto} COP`);
    } */
};
//aplicarDescuento();
//aplicarDescuento("100");
//aplicarDescuento(-100);
//aplicarDescuento(1000, -20);
//aplicarDescuento(1000, 50);
/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
por ejemplo. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)
*/
function calcularAnios (fecha = undefined){
    if(fecha === undefined) return console.warn("No ingresaste la fecha");

    if(!fecha instanceof Date) return console.error("El valor que ingresaste no es una fecha valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();  

}

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
por ejemplo. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, 
por ejemplo. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, 
por ejemplo. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/


