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

if(isNaN(edad)){
    if(edad > 0 && edad <= 130){
        if ((edad >= 16 && edad < 18) || edad >= 71){
            document.write(`El usuario tiene ${edad} años, es OPTATIVO votar` );
        }else if(edad >= 18 && edad < 71){
            document.write(`El usuario tiene ${edad} años, entonces ES OBLIGATORIO votar`);
        }else{
            document.write(`El usuario tiene ${edad} años, entonces NO PUEDE votar`);
        }
    }else{
        document.write(`Ingresó una edad inválida`);
    }    
}else{
    document.write(`No ingresó un número`);
}
