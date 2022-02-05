/*
5) Programa una función que invierta las palabras de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
let texto = 'Hola Mundo';

const invertirPalabra = (cadena = '') => {
    if(!cadena) return console.warn('NO ingresaste una cadena');

    let nuevaCadena = '';
    for(let i = cadena.length-1; i >= 0; i--){
        nuevaCadena += cadena.charAt(i);
    }
    return nuevaCadena
}

//console.info(invertirPalabra(texto));
//Solucion de Jon Mircha
const invertirCadena = (cadena = '') =>{
    (!cadena)
        ? console.warn('NO  ingresaste una cadena')
        : console.info(cadena.split('').reverse().join(''));
}
//invertirCadena();
//invertirCadena('Hola Mundo');


// ==========================================================================
// ==========================================================================
/*
6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

let texto2 = 'Hola mundo adios mundo';
const contarPalabraRepetida = (parrafo = '',palabra = '') => {
    if(!parrafo) return console.warn('NO ingresaste un texto');
    if(!palabra) return console.warn('NO ingresaste la palabra a buscar');

    let nuevoParrafo = parrafo.split(' ');
    let contador = 0;
    nuevoParrafo.forEach(element => {
        if(element === palabra) contador++;
    });

    return console.info(`La palabra "${palabra}" se repitio ${contador} vez/veces`);
}

//contarPalabraRepetida(texto2,'mundo');

//Solucion de Jon Mircha
const textoEnCadena = (cadena="",texto="") =>{
    if(!cadena) return console.warn('NO ingresaste el texto largo');
    if(!texto) return console.warn('NO ingresaste la palabra a evaluar');

    let i = 0, contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto,i);
        if(i !== -1){
            i++;
            contador++;
        }
    }

    return console.info(`La palabra "${texto}" se repite ${contador} veces`);
}
//textoEnCadena('Hola mundo adios mundo','mundo');

// ==========================================================================
// ==========================================================================
/*
7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.
*/

const esPalindromo = (cadena = '') => {
    if(!cadena) return console.warn('NO ingresaste una cadena');

    let cadenaInvertida = invertirPalabra(cadena);
    for(let i = 0; i < cadena.length-1; i++){
        if(cadena.toLowerCase().charAt(i) != cadenaInvertida.toLowerCase().charAt(i)){
            return false;
        }
    }
    return true;
}

//Solucion de Jon Mircha
const palindromo = (palabra ='') =>{
    if(!palabra) return console.warn('NO ingresaste una palabra o frase');
    
    palabra = palabra.toLowerCase();
    let alReves = palabra.split('').reverse().join('');

    return (palabra === alReves)
        ? console.info(`Si es palindromo. Palabra original ${palabra}, Palabra al reves ${alReves}`)
        : console.info(`No es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`);
}

//palindromo('');
//palindromo('hola mundo');
//palindromo('Salas');

//console.info(esPalindromo('Salas'));

// ==========================================================================
// ==========================================================================
/*8) Programa una función que elimine cierto patrón de caracteres 
de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

//Solucion de Jon Mircha
const eliminarCaracteres = (texto='',patron='') =>{
    (!texto)
        ? console.warn('NO ingresaste un texto')
        : (!patron)
            ? console.warn('NO ingresaste un patron')
            : console.info(texto.replace(new RegExp(patron,'ig'),''));
}

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xy");
eliminarCaracteres('Hola,mundo,hola','[a-z]');

