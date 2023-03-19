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