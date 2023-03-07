//while
/*while(condicion lógica){
    ejecutamos el codigo
    agregar algo para que el bucle finalize
}*/
let i = 1
document.write(`<h1>Bucle con While</h1>`);
while(i<=10){
    document.write("Este es el renglon "+i);
    document.write("<br>");
    i++;
}

//do while
/*do{
    codigo
    agregar algo para que el bucle finalize
}while(condicion)
*/
document.write(`<h1>Bucle con Do while</h1>`);
// let vueltas = 1
// do{
//     document.write(`<p>Este es el renglon ${vueltas}</p><br>`);
//     vueltas++;
// }while(confirm("Queres escribir otra linea?"))

let vueltas = 1
let limite = parseInt(prompt("Cuantas veces repetimos la siguiente linea?"))
do{
    document.write(`<p>Este es el renglon ${vueltas}</p><br>`);
   vueltas++;
}while(vueltas <= limite)
