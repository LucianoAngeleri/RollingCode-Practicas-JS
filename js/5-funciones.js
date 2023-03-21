// Funciones declarativas
function saludar(){
    //Aqui va todo el código que resuelve la función
    document.write('Hola Mundo<br>')
}
function saludarPersonaje(nombre, apellido, alias){
    let otroNombre = nombreCompleto( nombre, apellido)
    document.write(`<p>Hola, mi nombre es ${otroNombre}, me conocen como ${alias}</p>`)
}
// function nombreCompleto(nombre, apellido){
//     const nuevoNombre = nombre +', '+ apellido;
//     return nuevoNombre;
// }
// Funciones expresivas o anónimas
// const nombreCompleto = function(nombre, apellido){
//     return nombre +', '+ apellido;
// }

// Funciones flecha o arrow functions

const nombreCompleto = (nombre, apellido) => nombre +', '+ apellido;

//Llamar una función o invocar una función
saludar();
console.log("prueba")
saludar();

saludarPersonaje('Peter','Parker','Spiderman');
let nombre ='Clark';
let apellido ='Kent';
let heroe ='Superman';
saludarPersonaje(nombre,apellido,heroe);

let otroNombre = nombreCompleto("Tony", "Stark")
document.write(`<p>Hola, mi nombre es ${otroNombre}</p>`)

