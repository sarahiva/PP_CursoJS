/*
4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá 
Hola Mundo Hola Mundo Hola Mundo.
*/

export function repiteTexto(cadena,numVeces){
    if(typeof(cadena) === 'string'){
        if(typeof(numVeces) === 'number'){
            if(numVeces >= 1){
                let resultado = '';
                for(let i = 0; i < numVeces; i++){
                    resultado += `${cadena}\n`;
                }
                return resultado;
            }else{
                return 'El numero de veces indicado\n'+
                'deber ser mayor a 0';
            }
        }else{
            return 'El valor ingresado en el segundo\n' +
            'parametro debe ser un numero';
        }    
    }else{
        return 'El valor ingresado en el primer\n' +
        'parametro debe ser una cadena de texto';
    }
}

//Solucion de Jon Mircha
const repetirTexto = (texto = "", veces = undefined) => {
    if(!texto) return console.warn('No ingresaste un texto');

    if(veces === undefined) return console.warn('No ingresaste el numero de veces a repetir el texto');

    if(veces === 0) return console.error('El numero de veces no puede ser 0');

    if(Math.sign(veces) === -1) return console.error('El numero de veces no puede ser negativo');

    for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}