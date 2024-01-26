//Función que calcule el cuadrado de un número
//Si el número es negativo lanza una excepción
//Si el número es par lanza una excepción

//Programar la llamada a la función gestionando los errores
//Crear un bloque finally que muestre el texto "FIN"

function calcularCuadrado(numero){
    if (numero<0) throw Error("El número es negativo");
    if (numero%2===0) throw Error("El número es par");
    return numero**2;
}
try {
    let resultado;
    //resultado = calcularCuadrado(-4);
    //resultado = calcularCuadrado(4);
    resultado = calcularCuadrado(5);
    console.log("El resultado es:" + resultado);
} catch (error){
    console.log(error.message);
} finally {
    console.log("Fin");
}