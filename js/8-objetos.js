// Crear un bojeto, notacion literal

let cancion = {
  //Propiedades key:value
  titulo: "Muchachos",
  artista: "La Mosca",
  duracion: "2:32 seg",
  anio: 2021,
  album: "Mundial 2022",
  genero: "Murga",
  id: 3462,
  //Métodos
  reproducir: function () {
    document.write(`<p>La canción '${this.titulo}' está reproducioendo...</p>`);
  },
  pausar:  () => { //Las arrow function no pueden referenciar "this"
    document.write(`<p>La canción está en pausa</p>`);
  },
};
//Mostrar Objeto
console.log(cancion);
//document.write(cancion) Muestra [object Object]
document.write(`<p>Artista: ${cancion.artista}</p>`);
document.write(`<p>Canción: ${cancion.titulo}</p>`);
document.write(`<p>Género: ${cancion.genero}</p>`);
document.write(`<p>Duración: ${cancion["duracion"]}</p>`);

// Agregar una propiedad
cancion.premios = "Disco de Oro";
document.write(`<p>Premios: ${cancion.premios}</p>`);

// Modificar una propiedad
cancion.artista = "La Mosca Tse Tse";
document.write(`<p>Artista: ${cancion.artista}</p>`);

// ELiminar una propiedad
delete cancion.premios
document.write(`<p>Premios: ${cancion.premios}</p>`);

//Ejecutar metodos
cancion.reproducir();
cancion.pausar();