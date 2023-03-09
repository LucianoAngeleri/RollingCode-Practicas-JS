/*
Ejercicio 9
10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
const cantFilas = parseInt(prompt("Ingrese la cantidad de Filas"))
const cantColumnas =parseInt(prompt("Ingrese la cantidad de Columnas"))
document.write(`<table><tbody>`)

for (let filas = 1; filas <= cantFilas; filas++) {
  document.write(`<tr>`)
 for (let columnas = 1; columnas <= cantColumnas; columnas++) {
  document.write(`<td>${(cantFilas)*(cantColumnas)}</td>`)
 }
 document.write(`</tr>`)
}
document.write(`</tbody></table>`)

