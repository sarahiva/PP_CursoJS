/*
1) Programa una función que cuente el número de 
caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.
 */

export function numCaracteres(cadena){
    //(typeof(cadena) === 'string') ? cadena.length :'NO es una cadena';
    if(typeof(cadena) === 'string'){
        if(cadena.length > 1){
            return `Tu cadena tiene ${cadena.length} caracteres`;
        }else{
            return `Tu cadena tiene ${cadena.length} caracter`;
        }
    }else{
        return 'NO es una cadena';
    }
}

//Solucion de Jon Mircha
/*function contarCaracteres(cadena = ''){
    if(!cadena){
        console.warn('No ingresaste una cadena');
    }else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}*/

const contarCaracteres = (cadena = "") => (!cadena)? console.warn('No ingresaste una cadena') : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

