let coches = [
    {marca:"VW",precio:7000,velocidad:240},
    {marca:"Peugeot",precio:800,velocidad:120},
    {marca:"Hyunday",precio:20000,velocidad:170},
    {marca:"Seat",precio:800,velocidad:130}
];

function compararCochesPorPrecioYVelocidad(coche1, coche2){
    //Precio ascendente y velocidad descendente
    if (coche1.precio != coche2.precio){
        return coche1.precio - coche2.precio;   
    } else {
        return coche2.velocidad - coche1.velocidad;
    }
}

//Ordenar por precio (ascendente) y a mismo precio por velocidad (descendente)
coches.sort(compararCochesPorPrecioYVelocidad);

coches.forEach(element => {
    console.log(element);
});

function compararCochesPorPrecio(coche1, coche2){
    return coche1.precio - coche2.precio;
}

function compararCochesPorVelocidad(coche1, coche2){
    return coche2.velocidad - coche1.velocidad;
}

coches.sort(compararCochesPorVelocidad);

coches.forEach(element => {
    console.log(element);
});

coches = [
    {marca:"VW",precio:7000,velocidad:240},
    {marca:"Peugeot",precio:800,velocidad:120},
    {marca:"Hyunday",precio:20000,velocidad:170},
    {marca:"Seat",precio:800,velocidad:130}
];

coches.sort((c1, c2) => c1.precio - c2.precio);
console.log("Con operador arrow");
coches.forEach(element => {
    console.log(element);
});