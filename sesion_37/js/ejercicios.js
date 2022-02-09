/*12) Programa una función que determine si un número 
es primo (aquel que solo es divisible por sí mismo y 1)
o no, pe. miFuncion(7) devolverá true.*/
const esPrimo = (numero = undefined) =>{
    if(numero === undefined || typeof(numero) !== "number") return console.warn('NO ingresaste un numero');
    if(Math.sign(numero) !== 1 || numero === 1) return console.error('El numero ingresado debe ser mayor a 1');

    let aux = numero/2;
    aux = Math.round(aux);
    if(numero % 1 === 0){
        if(aux >= 2){
            for(let i = 2; i <= aux; i++){
                if(numero % i === 0) return console.info(`"${numero}" NO es un numero primo`);
            }
        }
        return console.info(`"${numero}" es un numero primo`);
    }else{
        return console.info(`"${numero}" NO es un numero primo`);
    }
}
/*esPrimo();
esPrimo('1');
esPrimo(1);
esPrimo(7);*/
//////////////////Solucion de Jon Mircha /////////////////////
const numeroPrimo = (numero = undefined) =>{
    if(numero === undefined) return console.warn('NO ingresaste un numero');
    if(typeof(numero) !== 'number') return console.error(`El valor "${numero}" ingresado NO es un numero`);
    if(numero === 0) return console.error('El numero no puede ser 0');
    if(numero === 1) return console.error('El numero no puede ser 1');
    if(Math.sign(numero) === -1) return console.error('El numero no puede ser negativo');

    let divisible = false;
    for(let i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        }
    }

    return(divisible)
        ? console.info(`El numero ${numero} NO es primo`)
        : console.info(`El numero ${numero} SÍ es primo`);
}

/*numeroPrimo();
numeroPrimo('320');
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);
*/
//==============================================================
//==============================================================

/*13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.*/
const esParOImpar = (numero = undefined) =>{
    if(numero === undefined || typeof(numero) !== "number") return console.warn('NO ingresaste un numero');
    if(Math.sign(numero) !== 1) return console.error('El numero ingresado debe ser mayor a 0');

    (numero % 2 === 0)
        ? console.info(`"${numero}" es un numero PAR`)
        : console.info(`"${numero}" es un numero IMPAR`);
}
/*esParOImpar();
esParOImpar('1');
esParOImpar(0);
esParOImpar(29);*/

//////////////////Solucion de Jon Mircha /////////////////////
const numeroParImpar = (numero = undefined) =>{
    if(numero === undefined) return console.warn('NO ingresaste un numero');
    if(typeof(numero) !== 'number') return console.error(`El valor "${numero}" ingresado NO es un numero`);

    return (numero % 2 === 0)
        ? console.info(`El numero ${numero} es Par`)
        : console.info(`El numero ${numero} es IMPAR`);
}

/*numeroParImpar();
numeroParImpar('23');
numeroParImpar(-398);
numeroParImpar(19);*/
//==============================================================
//==============================================================

/*14) Programa una función para convertir grados Celsius 
a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */
const convetirEscalaTemperatura = (grados = undefined, escala = '') =>{
    if(grados === undefined || !escala) return console.warn('NO ingresaste un dato');
    if(typeof(grados) !== "number") return console.warn('Debes ingresar un numero como primer parametro');
    if(escala) escala = escala.toUpperCase();
    if(typeof(escala) !== "string" || (escala !== 'C' && escala !== 'F')) return console.warn('Debes ingresar "C" o "F" como segundo parametro');

    let aux = 0;
    if(escala === 'C'){
        aux = (grados * (9/5)) + 32;
        return console.info(`${grados}°C equivale a ${aux}°F`);
    }else{
        aux = (grados - 32) * (5/9);
        return console.info(`${grados}°F equivale a ${aux}°C`);
    }
}

/*convetirEscalaTemperatura();
convetirEscalaTemperatura('1','C');
convetirEscalaTemperatura(1,'CC');
convetirEscalaTemperatura(0,'C');
convetirEscalaTemperatura(-6,'C');
convetirEscalaTemperatura(-4,'F');
convetirEscalaTemperatura(5,'C'); */

//////////////////Solucion de Jon Mircha /////////////////////
const convertirGrados = (grados = undefined,unidad = undefined) =>{
    if(grados === undefined) return console.warn('NO ingresaste grados a convertir');
    if(typeof(grados) !== "number") return console.error(`El valor "${grados}" ingresado NO es un numero`);
    if(unidad === undefined) return console.warn('No ingresaste el tipo de grado a convertir');
    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto`);
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido');

    if(unidad === 'C'){
        return console.info(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`)
    }else if (unidad === 'F'){
        return console.info(`${grados}°F = ${Math.round((grados - 32) * (5/9))}°C`)
    }else{
        return console.error('El tipo de grados a convertir NO es valido');
    }

}

/*convertirGrados();
convertirGrados('2');
convertirGrados(2);
convertirGrados(2,true);
convertirGrados(2,'hola');
convertirGrados(100,'C');
convertirGrados(32,'F');
convertirGrados(100,'F');*/