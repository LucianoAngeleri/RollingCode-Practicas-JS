/*
// ES5
function VideoJuego(nombre,precio) {
    // Propiedades
    this.nombre = nombre;
    this.precio = precio;
}
//Instanciar un objeto
let juego1 = new VideoJuego("Super Mario",3500);
let juego2 = new VideoJuego("Terraria",129);

//Mostrar objeto
console.log(juego1)
console.log(juego2)
*/
// ES6
class VideoJuego{
    // Crear propiedades privadas
    #nombre
    //Método constructor
    constructor(paramNombre, genero, precio, desarrollador){
        // Propiedades
        this.#nombre = paramNombre;
        this._genero = genero;
        this._precio = precio;
        this._desarrollador = desarrollador;
        this._valoracion = 0;
    }
    //set y get propiedades computadas
    get genero(){
        return this._genero;
    }
    set genero(nuevoGenero){
        if(nuevoGenero.length > 0){
            this._genero = nuevoGenero;
        }
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoGenero.length > 0){
            this.#nombre = nuevoNombre;
        }
    }
    //Métodos
    mostrarInformacion(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this._precio}</li>
        <li>Genero: ${this.genero}</li>
        <li>Desarrollador: ${this._desarrollador}</li>
        </ul>`)
    }
    
}
class JuegoSupervivencia extends VideoJuego{
    #protagonista
    #antagonista
    constructor(nombre, genero, precio, desarrollador, protagonista, antagonista){
        //Invocar al constructor de videojuego
        super(nombre, genero, precio, desarrollador);
        this.#protagonista = protagonista;
        this.#antagonista = antagonista;
    }
    get protagonista(){
        return this.#protagonista;
    }
    set protagonista(nuevoProtagonista){
        if(nuevoGenero.length > 0){
            this.#protagonista = nuevoProtagonista;
        }
    }
    get antagonista(){
        return this.#antagonista;
    }
    set antagonista(nuevoAntagonista){
        if(nuevoGenero.length > 0){
            this.#antagonista = nuevoAntagonista;
        }
    }
    mostrarInformacion(){
        super.mostrarInformacion();
        document.write(`<ul>
        <li>Protagonista: ${this.protagonista}</li>
        <li>Antagonista: ${this.antagonista}</li>
        </ul>`)

    }
}
//Instanciar un objeto
let juego1 = new VideoJuego("Stardew Valley", "Simulador de granja", 150, "Apend");

//Mostrar objeto
console.log(juego1)
document.write(`<p>El juego ${juego1.nombre}, tiene le genero ${juego1.genero} tiene valoracion ${juego1._valoracion} </p>`)
// Modificar genero
juego1.genero = "La mejor granja"
console.log(juego1)
juego1.mostrarInformacion();

const residentEvil = new JuegoSupervivencia("Resident Evil 2", "Supervivencia, Terror", 1000, "Capcom", "Leon", "Birkin")
console.log(residentEvil)
residentEvil.mostrarInformacion();
