/**
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const obtenerAleatorio = () =>{
    return Math.round(Math.random() * (601 - 501) + 501);
}
//console.info(obtenerAleatorio());

//////////////// Solucion de Jon Mircha ///////////////////////////////
const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500));
//aleatorio();
// ==================================================================
// ====================================================================

/* 10) Programa una función que reciba un número y 
evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
pe. miFuncion(2002) devolverá true.*/

const esCapicua = (numero = '') => {
    if(!numero || typeof(numero) !== "number") return console.error('NO ingresaste un numero');
    
    let numeroInvertido = numero.toString().split('').reverse().join('');
    (numero === parseInt(numeroInvertido))
        ? console.info(true)
        : console.info(false);
}
//esCapicua();
//esCapicua('Hola');
//esCapicua(2011);
//esCapicua(2002);

//////////////// Solucion de Jon Mircha ///////////////////////////////
const capicua = (numero = '') => {
    if(!numero) return console.warn('NO ingresaste un numero');
    if(typeof(numero) !== 'number') return console.error(`El valor "${numero}" ingresado NO es un numero`);

    numero = numero.toString();
    let alReves = numero.split('').reverse().join('');

    return (numero === alReves)
        ? console.info(`Sí es capícua, Número original ${numero}, Número al revés ${alReves}`)
        : console.info(`No es capícua, Número original ${numero}, Número al revés ${alReves}`)
}

//capicua();
//capicua('19');
//capicua({});
//capicua(2000);
//capicua(2002);
//capicua(18.99);
//capicua(212.212);
// ==================================================================
// ==================================================================

/*11) Programa una función que calcule el factorial de un número
(El factorial de un entero positivo n, se define como el producto
de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (numero = '') =>{
    if(!numero || typeof(numero) !== "number") return console.error('NO ingresaste un numero');
    if(Math.sign(numero) !== 1) return console.error('Debes ingresar un numero mayor a 0');

    let resultado = 1;
    for(let i = 1; i <= numero; i++) resultado *= i;
    
    return console.info(`El factorial de ${numero} es ${resultado}`);
}
//factorial();
//factorial('hola');
//factorial(-22);
//factorial(5);

//////////////// Solucion de Jon Mircha ///////////////////////////////
const factorial2 = (numero = undefined) => {
    if(numero === undefined) return console.warn('NO ingresaste un numero');
    if(typeof(numero) !== 'number') return console.error(`El valor "${numero}" ingresado NO es un numero`);
    if(numero === 0) return console.error('El numero no puede ser 0');
    if(Math.sign(numero) === -1) return console.error('El numero no puede ser negativo');

    let factorial = 1;
    for(let i = numero; i > 1; i--){
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}

//factorial2();
//factorial2('5');
//factorial2([1,2,3]);
//factorial2(0);
//factorial2(-5);
//factorial2(5);
