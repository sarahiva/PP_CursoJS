/*
2) Programa una función que te devuelva el texto 
recortado según el número de caracteres indicados,
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

export function textoRecortado(cadena,numCaracteres){
    if(typeof(cadena) === 'string'){
        if(typeof(numCaracteres) === 'number'){
            if(Math.abs(numCaracteres) <= cadena.length){
                return 'Nueva cadena: ' + cadena.slice(0,numCaracteres);
            }else{
                return 'El numero de caracteres indicados supera\n' + 
                'la longitud de la cadena';
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