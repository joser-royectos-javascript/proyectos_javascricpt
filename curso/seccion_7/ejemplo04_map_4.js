let numeros = [3, 8, 12, 5, -3];

//OPCIÓN 1 - CON FUNCIÓN ANÓNIMA
numeros = numeros.map(function(numero){
    let doble = numero * 2;
    return doble;
});
console.log(numeros);

//OPCIÓN 2 - CON FUNCIÓN 'NORMAL'
function calcularDoble(numero){
    return numero*2;
}

numeros = numeros.map(calcularDoble);
console.log(numeros);

//OPCIÓN 3 - CON OPERADOR FLECHA
numeros = numeros.map(numero => {
    let doble = numero * 2;
    return doble;
})
console.log(numeros);

//OPCIÓN 4 - CON OPERADOR FLECHA SIMPLICADO
numeros = numeros.map(numero => numero * 2);
console.log(numeros);