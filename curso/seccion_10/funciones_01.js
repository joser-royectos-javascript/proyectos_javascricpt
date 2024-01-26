//Funcion sin argumentos ni retorno
function saludar(){
    console.log("Hola");
}

//Función con argumentos sin retorno
function saludarPersona(nombre){
    console.log(`Hola ${nombre}`);
}

//Función con argumentos y con retorno
function sumar(a, b){
    let resultado = a+b;
    return resultado;
}

//Funciones con argumentos con valor por defecto
function generarPDF(factura, color='Negro'){
    console.log("Generando pdf en color " + color);
}

//Funciones con argumentos con valor por defecto
function generarExcel(factura, color='Negro', formato='xlsx'){
    console.log("Generando excel en color " + color + " y en formato " + formato);
}

saludar();
saludarPersona("Ángel");
console.log(sumar(3,4));
generarPDF(undefined);
generarPDF(undefined, 'Azul');
generarExcel(undefined, 'Rojo');
generarExcel(undefined, 'Naranja', 'xls');
generarExcel(undefined, undefined, 'csv')//Generando excel en color Negro y en formato csv
generarExcel(undefined, null, 'csv');//Generando excel en color null y en formato csv