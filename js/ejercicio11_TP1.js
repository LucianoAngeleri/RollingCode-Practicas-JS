/*
Ejercicio 10
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejercicio 11
Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/
const numero = parseInt(prompt("ingrese un numero"))
if(numero % 2 === 0 ){
    document.write("El numero es divisible por 2")
}else if(numero % 3 === 0 ){
    document.write("El numero es divisible por 3")
}else if(numero % 5 === 0 ){
    document.write("El numero es divisible por 5")
}else if(numero % 7 === 0 ){
    document.write("El numero es divisible por 7")
}