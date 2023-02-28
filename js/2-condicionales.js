// Estructuras Condicionales "if"

/*
if (condicion){ 
    código a ejecutar SI SE CUMPLE
}else{
    codigo a ejecutar si NO SE CUMPLE
}
*/
//Solicitar la edad del ususario e indicar por pantalla si puede votar o no
let edad = prompt("Ingrese su edad: ");
if (edad>=16){
    document.write(`El usuario tiene ${edad} años, entonces PUEDE votar` );
}else{
    document.write(`El usuario tiene ${edad} años, entonces NO PUEDE votar`);
}