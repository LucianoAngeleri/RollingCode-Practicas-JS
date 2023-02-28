// Estructuras Condicionales "if"

/*
if (condicion){ 
    código a ejecutar SI SE CUMPLE
}else{
    codigo a ejecutar si NO SE CUMPLE
}
*/
//Solicitar la edad del ususario e indicar por pantalla si puede votar o no
let edad = parseInt(prompt("Ingrese su edad: "));
//parseint: Transformar una cadena de texto en numero
console.log(edad);
console.log(typeof(edad));

if (edad >= 16 && edad < 18 || edad >= 71){
    document.write(`El usuario tiene ${edad} años, es optativo votar` );
}else{
    document.write(`El usuario tiene ${edad} años, entonces NO PUEDE votar`);
}