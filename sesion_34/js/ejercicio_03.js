/*
3) Programa una función que dada una String te devuelva
un Array de textos separados por cierto caracter,
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

export function dividirCadena(cadena,separador){
    if(typeof(cadena) === 'string'){
        let arrayObtenido = cadena.split(separador);
        return `Array obtenido con ${arrayObtenido.length} elementos:\n [ ${arrayObtenido} ]`;
    }else{
        return 'El valor ingresado en el primer\n' +
        'parametro debe ser una cadena de texto';
    }
}