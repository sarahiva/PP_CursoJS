//exportacion 
export const PI = Math.PI;

export let usuario = 'Sara';
let password = 'qwerty';
//export default password;

//Exportacion por defecto
export default function saludar(){
    console.log('Hola modulos +ES6');
}

export class Saludar{
    constructor(){
        console.log('Hola Clases +ES6');
    }
}