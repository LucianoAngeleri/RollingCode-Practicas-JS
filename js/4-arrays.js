//Crear un array vacío
let frutas = [];
//Crear un array con películas
let peliculas = ["Los Vengadores:Endgame", 2019, "Ant-man", "Black Adam", true];

console.log(peliculas.length);
console.log(peliculas);
const mostrarPeliculas = (titulo = 'No hay titulo disponible') =>{
  document.write(`<h2>${titulo}</h2>`);
  document.write("<ul>");
  for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`);
  }
  document.write("</ul>");
}
// Agregar un elemento al principio del arreglo
peliculas.unshift("Harry Potter","Mario Bros")
mostrarPeliculas()
// Agregar un elemento en el medio del arreglo
//splice(posicion de la cual parto,elementos que quiero orrar,elemento que quiero agregar)
peliculas.splice(3,0,"La Ballena")
mostrarPeliculas("Agregamos un elemento en el medio del arreglo")

// Agregar un elemento al final del arreglo
peliculas.push("Iron Man")
mostrarPeliculas("Agregar un elemento al final del arreglo")
// Modificar un elemento del arreglo
peliculas[7] = "Thor"
mostrarPeliculas("Modificar un elemento del arreglo")
// Eliminar el ultimo elemento del arreglo
peliculas.pop()
mostrarPeliculas("Eliminar el ultimo elemento del arreglo")
// Borrar varios elementos del arreglo
peliculas.splice(5)
mostrarPeliculas("Borrar varios elementos del arreglo")
// Borrar 2 elementos del arreglo
peliculas.splice(5,2)
mostrarPeliculas("Borrar 2 elementos del arreglo")
// Borrar el primer elemento del arreglo
peliculas.shift()
mostrarPeliculas("Borrar el primer elemento del arreglo")
// Operaciones especiales con arrays
peliculas.sort() // Ordena los elemento segun la tabla UNICODE
mostrarPeliculas("Operaciones especiales con arrays")
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