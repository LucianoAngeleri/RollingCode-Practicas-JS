//Crear un array vacío
let frutas = [];
//Crear un array con películas
let peliculas = ['Los Vengadores:Endgame',2019,'Ant-man','Black Adam',true];

console.log(peliculas.length)
console.log(peliculas)

document.write('<h2>Lista de Películas</h2>')
document.write('<ul>')
for (let i = 0; i < peliculas.length; i++) {
    document.write(`<li>${peliculas[i]}</li>`) 
}
document.write('</ul>')