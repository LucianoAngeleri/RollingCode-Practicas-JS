//Comentario en una sola línea

/*
Comentario
env lineas
*/

//Creando y añadiendo variables (var - let - const)

let usuarioNombre = 'Luciano Angeleri'; //let puede cambiar de valor dependiendo del scope (alcance)
//En la actualidad se usa casi siempre let en lugar de var
const anio = 2023; //const no cambia de valor

//Mostrar por consola una variable
console.log('Hola Mundo');
console.log(usuarioNombre);
console.log('Es alumno del año' + anio);
console.log(usuarioNombre +' es alumno del año' + anio);
console.log(`${usuarioNombre} es alumno del año ${anio}`);
// JavaSCript y HTML no se conocen osea que tengo que hacer algo engañandolo parqa que muestre HTML 
// Mostrar un documento en HTML
document.write(`<h1>Hola Mundo!!</h1>`);
document.write(`${usuarioNombre} es alumno del año ${anio}`);
//Mostar un mensaje en una ventana emergente
alert('Este es un mensaje de alerta!!')