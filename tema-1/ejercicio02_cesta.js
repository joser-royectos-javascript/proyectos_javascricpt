/*
    Construir una página web desde la que se puedan agregar productos a la cesta
    y consultar los productos de la cesta.
*/

var cesta = [];

document.querySelector("#bAgregar").addEventListener("click", agregarProducto);

document.querySelector("#bMostrar").addEventListener("click", mostrarCestaGuay);

function agregarProducto(){
    console.log("Agregando producto...");
    const producto = document.querySelector("#iProducto").value;
    if (producto.trim().length>0) {
        cesta.push(producto);
        hacerLocucion(producto);
    }
}

function mostrarCestaCutre(){
    if (cesta.length==0) {
        document.querySelector("#cesta-cutre").innerHTML="La cesta cutre está vacía";
    } else {
        document.querySelector("#cesta-cutre").innerHTML=cesta;
    }
}

function mostrarCestaGuay(){
    let divCesta = document.querySelector("#cesta-guay");
    if (cesta.length==0) {
        divCesta.innerHTML="La cesta guay está vacía";
    } else {
        divCesta.innerHTML="";
        cesta.forEach(item => {
            divCesta.innerHTML+=`<br>${item}`;
        });
    }
}




















