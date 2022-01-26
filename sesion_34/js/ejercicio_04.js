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