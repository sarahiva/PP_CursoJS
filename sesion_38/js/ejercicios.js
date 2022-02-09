/**
15) Programa una función para convertir números de base 
binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.*/
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined || base === undefined) return console.warn('NO ingresaste un dato');
    if(typeof(numero) !== "number" || typeof(numero) !== "number") return console.warn('Ambos parametros deben ser numeros');
    if(base !== 2 && base !== 10) return console.warn('La base especificada deber ser "2" o "10"');

    if(base === 2){
        numero = numero.toString();
        let exp = /[2-9]/g;
        if(exp.test(numero)) return console.error('El numero que ingresaste NO esta en base binaria');
        
        let aux = numero.split('');
        let potencia = 0, resultado = 0;
        for(let i = aux.length-1 ; i >= 0; i--){
            if(aux[i] === '1'){
                resultado += Math.pow(2,potencia);
            }
            potencia++;
        }
        return console.info(`Base binaria: ${numero} a Base decimal: ${resultado}`);
        
    }else if(base === 10){
        let resultado = [], aux = numero;
        do{
            resultado.push(numero % 2); 
            numero = Math.floor(numero/2);
        }while(numero > 1);
        if(numero === 1) resultado[resultado.length] = 1;
        resultado = resultado.reverse().join('');
        return console.info(`Base decimal: ${aux} a Base binaria: ${resultado}`);
    }
}

/*convertirBinarioDecimal();
convertirBinarioDecimal('1','2');
convertirBinarioDecimal(100,2);
convertirBinarioDecimal(11011,2);
convertirBinarioDecimal(77,10);*/

//////////////////Solucion de Jon Mircha ///////////////////////////////////////
const convertirBinarioDecimal2 = (numero = undefined,base = undefined) =>{
    if(numero === undefined) return console.warn('No ingresaste el numero a convertir');
    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`);
    if(base === undefined) return console.warn('No ingresaste la base a convertir');
    if(typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un numero`);

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    }else if( base === 10){
        return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    }else{
        return console.error('El tipo de base a convertir NO es valido');
    }
}

/*convertirBinarioDecimal2();
convertirBinarioDecimal2('2');
convertirBinarioDecimal2(100);
convertirBinarioDecimal2(100,'2');
convertirBinarioDecimal2(100,2);
convertirBinarioDecimal2(101,2);
convertirBinarioDecimal2(4,10);
convertirBinarioDecimal2(114,10);
convertirBinarioDecimal2(100,10);*/

// =================================================================
// ===================================================================

/*16) Programa una función que devuelva el monto 
final después de aplicar un descuento a una cantidad dada,
pe. miFuncion(1000, 20) devolverá 800.*/
const aplicarDescuento = (cantidad = undefined, descuento = 0) => {
    if(cantidad === undefined) return console.warn('NO ingresaste un dato');
    if(typeof(cantidad) !== "number" || typeof(descuento) !== "number") return console.warn('Ambos parametros deben ser numeros');

    return console.info(`Monto final ${cantidad - ((cantidad * descuento)/100)}`);
}
/*aplicarDescuento();
aplicarDescuento(1000,20);
aplicarDescuento(500,10);*/

//////////////////Solucion de Jon Mircha ///////////////////////////////////////
const aplicarDescuento2 = (monto = undefined, descuento = 0) => {
    if(monto === undefined) return console.warn('NO ingresaste el monto');
    if(typeof(monto) !== "number") return console.error(`El valor ${monto} ingresado, NO es un numero`);
    if(monto === 0) return console.error('El monto no puede ser 0');
    if(Math.sign(monto) === -1) return console.error('El monto no puede ser negativo');
    if(typeof(descuento) !== "number") return console.error(`El valor ${descuento} ingresado, NO es un numero`);
    if(Math.sign(descuento) === -1) return console.error('El descuento no puede ser negativo');

    return console.info(`$${monto} - ${descuento}% = $${monto - ((monto * descuento)/100)}`);
}

/*aplicarDescuento2();
aplicarDescuento2('200');
aplicarDescuento2(0);
aplicarDescuento2(-1000);
aplicarDescuento2(1000,'20');
aplicarDescuento2(1000,-20);
aplicarDescuento2(1000);
aplicarDescuento2(1000,25);*/

//=============================================================================
// ============================================================================

/*17) Programa una función que dada una fecha válida 
determine cuantos años han pasado hasta el día de hoy,
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const aniosPasados = (fecha = '') =>{
    if(!fecha) return console.warn('Debes ingresar una fecha');
    fecha = new Date(fecha);
    let hoy = new Date();
    return (fecha.getFullYear() < hoy.getFullYear())
        ? console.warn(`Han pasado ${hoy.getFullYear() - fecha.getFullYear()} anios desde ${fecha.getFullYear()} hasta el presente anio`)
        : console.error('La fecha ingresada debe ser menor a la fecha actual');
}
//aniosPasados('1984/4/23');

//////////////////Solucion de Jon Mircha ///////////////////////////////////////
const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn('NO ingresaste una fecha');
    if(!(fecha instanceof Date)) return console.error('El valor ingresado NO es una fecha valida');

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

    return (Math.sign(aniosHumanos) === -1)
                ? console.info(`Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullYear()}`)
                : (Math.sign(aniosHumanos) === 1)
                    ? console.info(`Ahn pasado ${aniosHumanos} anios desde ${fecha.getFullYear()}`)
                    : console.info(`Estamos en el anio actual ${fecha.getFullYear()}`);
}

/*calcularAnios();
calcularAnios({});
calcularAnios(true);
calcularAnios(new Date());
calcularAnios(new Date(1999,4,1));
calcularAnios(new Date(2084,4,1));*/