/*24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero 
tendrá los numeros ordenados en forma ascendente 
y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6])
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
const ordenarArreglo = (arreglo = undefined) => {
    if(arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arreglo instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arreglo.length === 0) return console.error('El arreglo esta vacio');
    for (const num of arreglo) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`);
    } 
    return console.info({
        ascendente: arreglo.sort((a,b) => a-b),
        descendente: arreglo.sort((a,b) => a-b).reverse()
    });
}

/*ordenarArreglo();
ordenarArreglo('[1,2,3,4]');
ordenarArreglo([]);
ordenarArreglo([1,4,'3']);
ordenarArreglo([7,5,7,8,6]);*/

//////////////////Solucion de Jon Mircha /////////////////////
const ordenarArreglo2 = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arr.length === 0) return console.error('El arreglo esta vacio');
    for (const num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`);
    }
    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    });
}

/*ordenarArreglo2();
ordenarArreglo2('[1,2,3,4]');
ordenarArreglo2([]);
ordenarArreglo2([1,4,'3']);
ordenarArreglo2([7,5,7,8,6]);*/


// =============================================================================
// =============================================================================
/*25) Programa una función que dado un arreglo de elementos, 
elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].*/
const eliminarDuplicados = (arreglo = undefined) => {
    if(arreglo === undefined) return console.warn('No ingresaste un arreglo');
    if(!(arreglo instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arreglo.length === 0) return console.error('El arreglo esta vacio');
    const arregloAux = new Array();
    for (const item of arreglo) {if(!arregloAux.includes(item)) arregloAux.push(item)}
    return console.info(`Arreglo original : ${arreglo}\n Arreglo nuevo: ${arregloAux}`);
}

/*eliminarDuplicados();
eliminarDuplicados('2');
eliminarDuplicados([]);
eliminarDuplicados(['x',10,'x',2,'10',10,true,true]);*/

//////////////////Solucion de Jon Mircha /////////////////////
const quitarDuplicados = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arr.length === 0) return console.error('El arreglo esta vacio');
    if(arr.length === 1) return console.error('El arreglo debe tener al menos 2 elementos');

    //Primera forma
    /*return console.info({
        original: arr,
        sinDuplicados : arr.filter((value,index,self) => self.indexOf(value) === index)
    });*/
    //Segunda forma
    return console.info({
        original: arr,
        sinDuplicados : [...new Set(arr)]
    });
}

/*quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(['x',10,'x',2,'10',10,true,true]);*/
// =============================================================================
// =============================================================================
/*26) Programa una función que dado un arreglo de números
obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */
const obtenerPromedio = (arreglo = undefined) => {
    if(arreglo === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arreglo instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arreglo.length === 0) return console.error('El arreglo esta vacio');
    let sumaTotal = 0;
    for (const num of arreglo) {
        if(typeof num !== "number"){
            return console.error(`El valor "${num}" ingresado, NO es un numero`);
        }else{
            sumaTotal += num;
        }
    }
    return console.info(`El promedio del arreglo [${arreglo}] es ${sumaTotal/arreglo.length}`);
}

/*obtenerPromedio();
obtenerPromedio('2');
obtenerPromedio([]);
obtenerPromedio([1,2,3,'4']);
obtenerPromedio([9,8,7,6,5,4,3,2,1,0]);*/

//////////////////Solucion de Jon Mircha /////////////////////
const promedio = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un arreglo');
    if(arr.length === 0) return console.error('El arreglo esta vacio');
    for (const num of arr) {
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`);
    }

    return console.info(
        arr.reduce((total,num,index,arr) =>{
            total += num;
            if(index === arr.length-1){
                return `El promedio de ${arr.join(' + ')} es ${total / arr.length}`;
            }else{
                return total;
            }
        })
    );
}

/*promedio();
promedio({});
promedio([]);
promedio([1,2,3,true]);
promedio([9,8,7,6,5,4,3,2,1,0]);*/