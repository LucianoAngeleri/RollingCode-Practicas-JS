let productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "Protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial",
  ];
//Mostrar lista de productos
const mostrarProductos = (titulo = 'No hay titulo disponible', arreglo) =>{
    document.write(`<h2>${titulo}</h2>`);
    document.write("<ul>");
    // for (let i = 0; i < peliculas.length; i++) {
    //   document.write(`<li>${peliculas[i]}</li>`);
    // }
    // forEach
    // arreglo.forEach(producto => {
    //     document.write(`<li>${producto}</li>`);
    // });
    

    //map
    arreglo.map(producto=> document.write(`<li>${producto}</li>`))
    document.write("</ul>");
  }
mostrarProductos("Lista de Productos", productos)
//Filtrar los protectores solares
let listaProtectoresSolares = productos.filter(producto => producto.includes("Protector"))
console.log(listaProtectoresSolares)
mostrarProductos("Lista de Protectores Solares", listaProtectoresSolares)
//Buscar un serum "find"
let serum = productos.find( producto => producto.includes("Sérum"))
let otroProducto = productos.find( producto => producto.includes("Bálsamo"))
document.write(`<p>Producto buscado: ${serum}</p>`)
document.write(`<p>Producto buscado: ${otroProducto === undefined ? "No econtramos el producto buscado" : otroProducto}</p>`)