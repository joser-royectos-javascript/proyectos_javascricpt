
/*
Crear un array con tres Productos (nombre, precio unitario y número de unidades)
Utilizando el método map del array, mostrar la siguiente información por consola:
Fabada Litoral. 3 unidades. 1.5€/unidad. Total 4.5€.
NOTA: Utilizar INTERPOLACIÓN para construir la cadena.
*/

let productos = [
    {producto:"Leche",cantidad:3,precio:1.5},
    {producto:"Pan",cantidad:2,precio:1},
    {producto:"Arroz",cantidad:4,precio:2},
]

function mostrarProducto(producto){
    
    let mensaje = `${producto.producto}. ${producto.cantidad} unidades. ${producto.precio}€/unidad. Total ${producto.cantidad*producto.precio}€.`
    console.log(mensaje);
}

productos.map(mostrarProducto);