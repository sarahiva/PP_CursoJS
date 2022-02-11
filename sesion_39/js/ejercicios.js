/*18) Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
const contarAlfabeto = (cadena = '') =>{
    if(!cadena) return console.warn('NO ingresaste una cadena');
    if(typeof cadena !== "string") return console.warn('Debes ingresar una cadena de texto');

    let expVocales = /[aeiou]/gi;
    //let expConsonantes = /[^aeiou0-9 ]/gi;
    let expConsonantes = /[b-df-hj-np-tv-z]/gi;  
    console.info(`La cadena "${cadena}" tiene ${cadena.match(expVocales).length} vocales 
    y ${cadena.match(expConsonantes).length} constantes`);
}
/*contarAlfabeto();
contarAlfabeto('Hola Mundo 1');*/

////////////Solucion de Jon Mircha//////////////////////
const contarLetras = (cadena ='') =>{
    if(!cadena) return console.warn('NO ingresaste una cadena de texto');
    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    let vocales = 0, consonantes = 0;
    cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena) {
        if(/[aeiouáéíóúü]/.test(letra)) vocales++;
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

/*contarLetras();
contarLetras(3);
contarLetras('Hola Mundo');
contarLetras('ñoño')*/


// ================================================================================
// =================================================================================
/*19) Programa una función que valide que un texto sea 
un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
const nombreValido = (nombre = '') =>{
    if(!nombre) return console.warn('NO ingresaste una cadena');
    if(typeof nombre != "string") return console.warn('Debes ingresar una cadena de texto');
    let expNombre = /[^A-Z]/gi;
    return(expNombre.test(nombre))
        ? console.info('El nombre NO correcto')
        : console.info('El nombre es correcto');
}
//nombreValido('Sarahi V@azquez');

////////////Solucion de Jon Mircha//////////////////////
const validarNombre = (nombre = '') =>{
    if(!nombre) return console.warn('NO ingresaste un nombre');
    if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto`);
    
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return (expReg)
        ? console.info(`"${nombre}", es un nombre valido`)
        : console.warn(`"${nombre}", NO es un nombre valido`);
}

/*validarNombre();
validarNombre(3);
validarNombre('Sarahi Vazquez');
validarNombre('Sarahi Vazquez, 22');*/

// ================================================================================
// =================================================================================
/*20) Programa una función que valide que un texto sea un 
email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

////////////Solucion de Jon Mircha//////////////////////
const validarEmail = (email = '') =>{
    if(!email) return console.warn('NO ingresaste un nombre');
    if(typeof email !== "string") return console.error(`El valor "${email}" ingresado, NO es una cadena de texto`);
    
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg)
        ? console.info(`"${email}", es un email valido`)
        : console.warn(`"${email}", NO es un email valido`);
}

/*validarEmail();
validarEmail(3);
validarEmail('jon,mir,cha@gmail');
validarEmail('jonmircha@gmail.com');*/

// ===========================================================================
// =======================================================================
/**Fusion 19 y 20 */
const validarPatron = (cadena = '', patron = undefined) =>{
    if(!cadena) return console.warn('NO ingresaste una cadenade texto a evaluar');
    if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    if(patron === undefined) return console.warn('NO ingresaste un patron a evaluar');
    if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresion regular`);
    
    let expReg = patron.test(cadena);

    return (expReg)
        ? console.info(`"${cadena}", cumple con el patron ingresado`)
        : console.warn(`"${cadena}", NO cumple con el patron ingresado`);
}

validarPatron();
validarPatron({});
validarPatron('Hola muundo');
validarPatron('Hola mundo',[1,2,3]);
validarPatron('Sarahi Vazquez',/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron('Sarahi Vazquez 22',/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
validarPatron('jonmircha@gmail',new RegExp('/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/','i'));
validarPatron('jonmircha@gmail.com',new RegExp('[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})','i'));