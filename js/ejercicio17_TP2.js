/*
Ejercicio 17
Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/
const frase = prompt("Ingrese una frase:")

for (let indiceCaracter = 0; indiceCaracter < frase.length; indiceCaracter++) {
  if (frase.charAt(indiceCaracter) === "a" || frase.charAt(indiceCaracter) === "A" || frase.charAt(indiceCaracter) === "á" || frase.charAt(indiceCaracter) === "Á") {
    document.write(`La vocal ‘${frase.charAt(indiceCaracter)}’ está en la posición ${indiceCaracter}`)
    indiceCaracter = frase.length;
  }

  if (frase.charAt(indiceCaracter) === "e" || frase.charAt(indiceCaracter) === "E" || frase.charAt(indiceCaracter) === "é" || frase.charAt(indiceCaracter) === "É") {
    document.write(`La vocal ‘${frase.charAt(indiceCaracter)}’ está en la posición ${indiceCaracter}`)
    indiceCaracter = frase.length;
  }

  if (frase.charAt(indiceCaracter) === "i" || frase.charAt(indiceCaracter) === "I" || frase.charAt(indiceCaracter) === "í" || frase.charAt(indiceCaracter) === "Í") {
    document.write(`La vocal ‘${frase.charAt(indiceCaracter)}’ está en la posición ${indiceCaracter}`)
    indiceCaracter = frase.length;
  }

  if (frase.charAt(indiceCaracter) === "o" || frase.charAt(indiceCaracter) === "O" || frase.charAt(indiceCaracter) === "ó" || frase.charAt(indiceCaracter) === "Ó") {
    document.write(`La vocal ‘${frase.charAt(indiceCaracter)}’ está en la posición ${indiceCaracter}`)
    indiceCaracter = frase.length;
  }

  if (frase.charAt(indiceCaracter) === "u" || frase.charAt(indiceCaracter) === "U" || frase.charAt(indiceCaracter) === "ú" || frase.charAt(indiceCaracter) === "Ú") {
    document.write(`La vocal ‘${frase.charAt(indiceCaracter)}’ está en la posición ${indiceCaracter}`)
    indiceCaracter = frase.length;
  }

}



