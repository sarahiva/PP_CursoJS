/**21) Programa una función que dado un array numérico 
devuelve otro array con los números elevados al cuadrado,
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
const elevarNumeros = (arreglo = undefined) =>{
    if(arreglo === undefined) return console.warn('No ha ingresado el arreglo');
    if(!(arreglo instanceof Array)) return console.error('El valor ingresado no es valido');
    for(let i = 0; i < arreglo.length; i++){
        if( typeof arreglo[i] !== "number") return console.error('Los datos ingresados en el arreglo no son validos');
    }

    let nuevoArreglo = new Array();
    arreglo.forEach(element => { nuevoArreglo.push(Math.pow(element,2));});

    return console.info(`Arreglo original: ${arreglo}, Arreglo nuevo: ${nuevoArreglo}`);
}

/*elevarNumeros();
elevarNumeros('hola');
elevarNumeros([1,2,'3',4,5]);
elevarNumeros([1,2,3,4,5]);*/


//////////////////Solucion de Jon Mircha /////////////////////
const devolverCuadrados = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arr.length === 0) return console.error('El arreglo esta vacio');

    for (const num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`);
    }

    const newArr = arr.map(el => el * el);
    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
}

/*devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1,'3',4,{}]);
devolverCuadrados([1,4,8]);*/


// ========================================================================
// ========================================================================
/*22) Programa una función que dado un array devuelva el 
número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
const buscarMaxMin = (arreglo = undefined) =>{
    if(arreglo === undefined) return console.warn('No ha ingresado un arreglo');
    if(!(arreglo instanceof Array)) return console.error('El valor ingresado debe ser un arreglo de numeros');
    for(let i = 0; i < arreglo.length; i++){
        if(typeof arreglo[i] !== 'number') return console.error('Los datos ingresados en el arreglo no son validos');
    }
    let auxMax = arreglo[0], auxMin = arreglo[0], minNum = 0, maxNum = 0;
    for(let i = 1; i < arreglo.length; i++){
        if(arreglo[i] > auxMax){
            maxNum = arreglo[i];
            auxMax = arreglo[i];
        }

        if(arreglo[i] < auxMin){
            minNum = arreglo[i];
            auxMin = arreglo[i];
        }
    }

    return console.info(`Arreglo: ${arreglo}, Valor maximo: ${maxNum}, Valor minimo: ${minNum}`);
}

/*buscarMaxMin();
buscarMaxMin('[1,2,3,4,5]');
buscarMaxMin([1,2,3,4,'5']);
buscarMaxMin([1,2,3,4,5]);
buscarMaxMin([1,4,5,99,-60]);*/


//////////////////Solucion de Jon Mircha /////////////////////
const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arr.length === 0) return console.error('El arreglo esta vacio');

    for (const num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`);
    }

    return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}`);
}

/*arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2,3,true]);
arrayMinMax([1,4,5,99,-60]);*/


// ========================================================================
// ========================================================================
/*23) Programa una función que dado un array de números 
devuelva un objeto con 2 arreglos en el primero almacena 
los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
const dividirArreglo = (arreglo = undefined) => {
    if(arreglo === undefined) return console.warn('No ha ingresado un arreglo');
    if(!(arreglo instanceof Array)) return console.error('El valor ingresado debe ser un arreglo de numeros');
    for(let i = 0; i < arreglo.length; i++){
        if(typeof arreglo[i] !== "number") return console.error('Los datos ingresados en el arreglo no son validos');
        if(/[.]+[1-9]/.test(arreglo[i])) return console.error('Los elementos del arreglo deben ser numeros enteros');
    }

    let arregloPares = new Array(), arregloImpares = new Array();
    arreglo.forEach(element => {
        if(element % 2 === 0){
            arregloPares.push(element);
        }else{
            arregloImpares.push(element);
        }
    });
    return console.info(`Arreglo ingresado: ${arreglo}, Pares: ${arregloPares}, Impares: ${arregloImpares}`);
}

/*dividirArreglo();
dividirArreglo('[1,2,3,4]');
dividirArreglo([1,2,3,5,'6']);
dividirArreglo([1,2,3,4,5.5,6]);
dividirArreglo([1,2,3,4,5,6,7,8,9,0]);*/

//////////////////Solucion de Jon Mircha /////////////////////
const separarParesImpares = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arr.length === 0) return console.error('El arreglo esta vacio');

    for (const num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`);
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares : arr.filter(num => num % 2 === 1)
    });
}

/*separarParesImpares();
separarParesImpares('hola');
separarParesImpares([]);
separarParesImpares([2,4,'j']);
separarParesImpares([1,2,3,4,5,6,7,8,9,0]);*/