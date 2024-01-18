//var cesta = [];
var cesta = ['Pan','Agua'];
//var cesta = Array();
//var cesta = new Array();

function mostrarCesta(){
    console.log(cesta);
}
function mostrarProducto(indice){
    console.log(cesta[indice]);//Acceso a la posición 'indice' del array
}

function modificarProducto(indice, item){
    cesta[indice]=item;
}

function agregarProducto(item) {
    cesta.push(item);//Agregar elemento al array
}

agregarProducto("Keso");
mostrarCesta();//['Pan', 'Agua', 'Keso']
mostrarProducto(1);//Agua
modificarProducto(2, "Queso");
mostrarProducto(2);

console.log(cesta);

//RECORRER UN ARRAY

cesta.forEach(producto => {
    console.log(producto);
});
