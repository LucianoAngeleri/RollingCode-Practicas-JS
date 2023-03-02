/*
let opcion = ""
switch(opcion){
    case 1:
        bloque de código para ejercutar en el caso 1
        break;
    case 2:
        bloque de código para ejercutar en el caso 2
        break;
    case 3:
        bloque de código para ejercutar en el caso 3
        break;
    case "deposito":
        bloque de código para ejercutar en el caso 1
        break;
    case default:
        bloque de código para ejercutar por defecto (si no se cumple ningun caso)
}
*/

/*
Solicitar al usuario que seleccione un día de la semana,
y le vamos a sugerir un menú para cada día:
Plato principal
Bebida
Postre
*/
const dia = prompt("Seleccione un día de la semana: 1-Lunes, 2-Miercoles, 3-Viernes: ");

switch (dia){
  case "1":
  case "lunes":
  case "Lunes":
    document.write(`
        <h1>Lunes</h1>
        <h2>Menú</h2>
        <ul>
            <li>Plato Principal:Milanesa con pure</li>
            <li>Bebida:Coca-Cola</li>
            <li>Postre:Flan con dulce de leche</li>
        </ul>`);
    break;
  case "2":
  case "miercoles":
  case "Miercoles":
  case "Miércoles":
  case "miércoles":
    document.write(`
        <h1>Miercoles</h1>
        <h2>Menú</h2>
        <ul>
            <li>Plato Principal:Filet de merluza con papas</li>
            <li>Bebida:Sprite</li>
            <li>Postre:Brownie con Helado</li>
        </ul>`);
    break;
  case "3":
  case "viernes":
  case "Viernes":
    document.write(`
        <h1>Viernes</h1>
        <h2>Menú</h2>
        <ul>
            <li>Plato Principal:Pizza</li>
            <li>Bebida:Cerveza</li>
            <li>Postre:Helado</li>
        </ul>`);
    break;
  default:
    document.write(`<h1>No eligio un dia valido</h1>`);
    break;
}
