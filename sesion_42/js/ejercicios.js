/**27) Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los 
siguentes datos: id de la película en IMDB, titulo, director, 
año de estreno, país o países de origen, géneros y calificación en IMBD.
- **Todos los datos del objeto son obligatorios.
- **Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    7 restantes números.
- **Valida que el título no rebase los 100 caracteres.
- **Valida que el director no rebase los 50 caracteres.
- **Valida que el año de estreno sea un número entero de 4 dígitos.
- **Valida que el país o paises sean introducidos en forma de arreglo.
- **Valida que los géneros sean introducidos en forma de arreglo.
- **Valida que los géneros introducidos esten dentro de los géneros 
    aceptados*.
- **Crea un método estático que devuelva los géneros aceptados*.
- **Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
- **Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, 
Biography, Comedy, Crime, Documentary ,Drama, Family, 
Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, 
Sport, Talk-Show, Thriller, War, Western.
 */

class Pelicula{
    constructor(id = undefined,titulo = undefined,director = undefined,anio = undefined,pais = undefined,generos = undefined,calificacion = undefined){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        //this.validarDatosCompletos();
    }

    validarDatosCompletos(){
        if(this.id === undefined || this.titulo === undefined || this.director === undefined 
            || this.anio === undefined || this.pais === undefined || this.generos === undefined 
            || this.calificacion === undefined) {
                console.warn('Los atributos del obj estan incompletos');
                return -1;
            }else{
                return 1;
            } 
    }

    validarID(){
        if(typeof this.id !== "string"){
            console.warn('El atributo ID debe ser de tipo String');
            return -1;
        }
        if(this.id.length !== 9){
            console.warn('El atributo ID debe tener 9 caracteres');
            return -1;
        }
        if(!(/^[a-z]{2}[0-9]{7}/i.test(this.id))){
            console.error('El formato del atributo ID es incorrecto');
            return -1;
        }

        return 1;
    }

    validarTitulo(){
        if(typeof this.titulo !== "string"){
            console.warn('El atributo TITULO debe ser de tipo String');
            return -1;
        }
        if(this.titulo.length > 100){
            console.warn(`El atributo TITULO tiene ${this.titulo.length} caracteres, debe tener menos de 101 caracteres`);
            return -1;
        }
        return 1;
    }

    validarDirector(){
        if(typeof this.director !== "string"){
            console.warn('El atributo DIRECTOR debe ser de tipo String');
            return -1;
        } 
        if(this.director.length > 50){
            console.warn(`El atributo DIRECTOR tiene ${this.director.length} caracteres, debe tener menos de 51 caracteres`);
            return -1;
        }
        return 1;
    }

    validarAnio(){
        if(typeof this.anio !== 'number'){
            console.warn('El atributo ANIO debe ser un entero positivo');
            return -1;
        }
        if(this.anio < 1885){
            console.error('El atributo ANIO debe ser un entero mayor a 1885');
            return -1;
        }
        if(this.anio.toString().length !== 4){
            console.error('El atributo ANIO debe ser un entero de 4 digitos');
            return -1;
        }
        return 1;
    }

    validarPaises(){
        if(!(this.pais instanceof Array)){
            console.warn('El atributo PAIS debe ser introducido como un arrreglo');
            return -1;
        }
        if(this.pais.length === 0){
            console.error('El atributo PAIS esta vacio');
            return -1;
        }
        for (const item of this.pais) {
            if(typeof item !== "string"){
                console.error(`El valor "${item}" ingresado en el atributo PAIS, NO es un string`);
                return -1;
            }
        }
        return 1;
    }

    static generosAceptados(){
        return ['Action','Adult','Adventure','Animation','Biography','Comedy','Crime','Documentary','Drama','Family', 
            'Fantasy','Film Noir','Game-Show','History','Horror','Musical','Music','Mystery','News','Reality-TV', 
            'Romance','Sci-Fi','Short','Sport','Talk-Show','Thriller','War','Western'];
    }

    validarGeneros(){
        if(!(this.generos instanceof Array)){
            console.warn('El atributo GENERO debe ser introducido como un arrreglo');
            return -1;
        }
        if(this.generos.length === 0){
            console.error('El atributo GENERO esta vacio');
            return -1;
        }
        for (const item of this.generos) {
            if(typeof item !== "string"){
                console.error(`El valor "${item}" ingresado en el atributo GENERO, NO es un string`);
                return -1;
            }
        }

        const arr = Pelicula.generosAceptados();
        const arregloGeneros = arr.map(el => el.toLowerCase());
        for (const genery of this.generos) {
            if(!arregloGeneros.includes(genery.toLowerCase())){
                console.error(`El valor "${genery}" NO es un genero aceptado`);
                return -1;
            }
        }
        return 1;
    }

    validarCalificacion(){
        if(typeof this.calificacion !== 'number'){
            console.warn('El atributo CALIFICACION debe ser un numero');
            return -1;
        }
        if(this.calificacion < 0 || this.calificacion > 10 ){
            console.error('El atributo CALIFICACION debe ser un numero entre 0 y 10');
            return -1;
        }
        if(/.[0-9]{2}/.test(this.calificacion.toString())){
            console.warn('El atributo CALIFICACION solo puede tener un digito como decimal');
            return -1;
        }
        return 1;
    }

    devolverFichaTecnica(){
        if(this.validarDatosCompletos() === 1 && this.validarID() === 1 && this.validarTitulo() === 1 && this.validarDirector() === 1
            && this.validarAnio() === 1 && this.validarPaises() === 1 && this.validarGeneros() === 1 && this.validarCalificacion() === 1){
            console.info(`\tFICHA TECNICA\nID: ${this.id}\nTitulo: ${this.titulo}\nDirector(a): ${this.director}\nAño: ${this.anio}\nPais(es) de Origen: ${this.pais.join(',')}\nGenero(s): ${this.generos.join(',')}\nCalificacion IMDB: ${this.calificacion}`);
        }
    }

    
}

//const Mujercitas = new Pelicula('tt3281548','Mujercitas','Greta Gerwing',2019,['EEUU'],['Drama','Romance'],7.8);
//const Mujercitas = new Pelicula('tt3281548','Tituloooooo deeeeeeeeeeeeeeeeeeeeeeeeeeeeee laaaaaaaaaaaaaaaaaaaaaaa Peliiiculaaaaaa Mujercitassssssssssssssssssssssssssssssssss','Greta Gerwing',2019,['EEUU'],['Drama','Romance'],7.8);
//const Mujercitas = new Pelicula('tt3281548','Mujercitas','Gretaaaaaaaaaaaaaaaaaaaaa Gerwinggggggggggggggggggggg',2019,['EEUU'],['Drama','Romance'],7.8);
const Mujercitas = new Pelicula('tt3281548','Mujercitas','Greta Gerwing',2019,['EEUU'],['Drama','romance'],7.8);
//console.log(Mujercitas);
//Mujercitas.validarDatosCompletos();
//Mujercitas.validarID();
//Mujercitas.validarTitulo();
//Mujercitas.validarDirector();
//Mujercitas.validarAnio();
//Mujercitas.validarPaises();
//Mujercitas.validarGeneros();
//console.info(Pelicula.generosAceptados());
//Mujercitas.validarCalificacion();
Mujercitas.devolverFichaTecnica();

// ==============================================================================================
// =================== Solucion de Jon Mircha ===================================================
class Peliculas{
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ['Action','Adult','Adventure','Animation','Biography','Comedy','Crime','Documentary','Drama','Family', 
        'Fantasy','Film Noir','Game-Show','History','Horror','Musical','Music','Mystery','News','Reality-TV', 
        'Romance','Sci-Fi','Short','Sport','Talk-Show','Thriller','War','Western'];
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Peliculas.listaGeneros.join(',')}`);
    }

    validarCadena(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        return true;
    }

    validarLongitudCadeda(propiedad,valor,longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);
        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresado, NO es un numero`);
        return true;
    }

    validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" NO tiene datos`);
        for (let cadena of valor) {
            if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }

    validarIMDB(id){
        if(this.validarCadena('IMDB ID',id)){
            // ^   - No debe ir nada antes de  /   $ - NO debe ir nada despues de
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMDB ID "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`);
            
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena('Titulo',titulo)){
            this.validarLongitudCadeda('Titulo',titulo,100);
        }
    }

    validarDirector(director){
        if(this.validarCadena('Director',director)){
            this.validarLongitudCadeda('Director',director,50);
        }
    }

    validarEstreno(estreno){
        if(this.validarNumero('Anio de Estreno',estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))) return console.error(`Anio de Estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`);
        }
    }

    validarPais(pais){
        this.validarArreglo('Pais',pais);
    }

    validarGeneros(generos){
        if(this.validarArreglo('Generos',generos)){
            for (let genero of generos) {
                if(!Peliculas.listaGeneros.includes(genero)){
                    console.error(`Genero(s) incorrectos "${generos.join(',')}"`);
                    Peliculas.generosAceptados();
                }
            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero('Calificacion',calificacion)){
            return (calificacion < 0 || calificacion > 10)
                ? console.error('La calificcion tiene que estar en un rango entre 0 y 10')
                : this.calificacion = calificacion.toFixed(1);
        }
    }

    fichaTecnica(){
        console.info(`\tFICHA TECNICA\nID: ${this.id}\nTitulo: ${this.titulo}\nDirector(a): ${this.director}\nAño: ${this.estreno}\nPais: ${this.pais.join('-')}\nGeneros: ${this.generos.join(',')}\nCalificacion: ${this.calificacion}`);
    }
}

//Peliculas.generosAceptados();
/*const Peli = new Peliculas({
    id: 'tt1234567',
    titulo: 'Titulo de la Peli',
    director: 'Director de la Peli',
    estreno: 2020,
    pais: ['Mexico'],
    generos: ['Comedy','Sport'],
    calificacion: 7.789
});

Peli.fichaTecnica();*/

const misPelis = [
    {
        id: 'tt0758758',
        titulo: 'Into the Wiki',
        director: 'Sean Penn',
        estreno: 2007,
        pais: ['USA'],
        generos: ['Adventure','Biography','Drama'],
        calificacion: 8.1
    },
    {
        id: 'tt0479143',
        titulo: 'Rocky Balboa',
        director: 'Sylvester Stallone',
        estreno: 2006,
        pais: ['USA'],
        generos: ['Action','Sport','Drama'],
        calificacion: 7.1
    },
    {
        id: 'tt0468569',
        titulo: 'The Dark Knight',
        director: 'Christopher Nolan',
        estreno: 2008,
        pais: ['USA','UK'],
        generos: ['Action','Crime','Drama'],
        calificacion: 9.0
    }
];

misPelis.forEach(el => new Peliculas(el).fichaTecnica());