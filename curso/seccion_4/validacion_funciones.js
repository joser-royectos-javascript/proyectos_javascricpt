function sumar(x, y){
    x = parseInt(x);
    y = parseInt(y);
    if (isNaN(x) || isNaN(y)){
        //Error
        throw "No es un número";
    };
    let resultado = x + y;
    return resultado;
}

console.log(sumar(1,3));
console.log(sumar(1,"4"));
console.log(sumar(1,"ocho"));//Genera un error (línea 6)

