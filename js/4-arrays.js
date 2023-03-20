//Crear un array vacío
let frutas = [];
//Crear un array con películas
let peliculas = ["Los Vengadores:Endgame", 2019, "Ant-man", "Black Adam", true];

console.log(peliculas.length);
console.log(peliculas);

document.write("<h2>Lista de Películas</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Agregar un elemento al principio del arreglo
peliculas.unshift("Harry Potter","Mario Bros")
document.write("<h2>Agregamos un elemento al principio del arreglo </h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Agregar un elemento en el medio del arreglo
//splice(posicion de la cual parto,elementos que quiero orrar,elemento que quiero agregar)
peliculas.splice(3,0,"La Ballena")
document.write("<h2>Agregamos un elemento en el medio del arreglo</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Agregar un elemento al final del arreglo
peliculas.push("Iron Man")
document.write("<h2>Agregamos un elemento al final del arreglo</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Modificar un elemento del arreglo
peliculas[7] = "Thor"
document.write("<h2>Modificamos el elemento 7 del arreglo</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
document.write("</ul>");
// Eliminar el ultimo elemento del arreglo
peliculas.pop()
document.write("<h2>Eliminamos el último elemento del arreglo</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Borrar varios elementos del arreglo
peliculas.splice(5)
document.write("<h2>Borrar todos los elementos del arreglo desde la posicion 5</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Borrar 2 elementos del arreglo
peliculas.splice(5,2)
document.write("<h2>Borrar los elementos del arreglo desde la posicion 5 a la 6</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Borrar el primer elemento del arreglo
peliculas.shift()
document.write("<h2>Borrar los elementos del arreglo desde la posicion 5 a la 6</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Operaciones especiales con arrays
peliculas.sort() // Ordena los elemento segun la tabla UNICODE
document.write("<h2>Ordenar los elementos con sort()</h2>");
document.write("<ul>");
for (let i = 0; i < peliculas.length; i++) {
  document.write(`<li>${peliculas[i]}</li>`);
}
document.write("</ul>");
// Metodo include, para saber si existe un elemento dentro del array
document.write("<h2>Existe la Pelicula 'Mario Bros'? con incudes()</h2>");
document.write(`<p>${peliculas.includes('Mario Bros')}</p>`); 
//Operador ternario
/* if(condicion){
    codigo  
    }else{
        otro codigo
    }
    Op ternario (condicion lógica) ? true : false;
*/ 
let existePeli = peliculas.includes('Mario Bros') ? "SI se encontró la pelicula":"NO se econtró la película";
document.write(`<p>${existePeli}</p>`)