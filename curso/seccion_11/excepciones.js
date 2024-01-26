function sumar(...sumandos){
    if (sumandos.length==0){
        return 0;
    }
    //No puede recibir menos de 2 argumentos
    if (sumandos.length<2){
        throw new Error("No puede tener menos de dos argumentos");
    }
    let resultado = sumandos.reduce((a,b)=>a+b);
    return resultado;
}

try {
    let resultado=sumar();
    console.log(resultado);
} catch (elerror) {
    console.error(elerror.message);
}

let resultado = sumar(1,3);
console.log(resultado);

resultado = sumar(1,-5,4);
console.log(resultado);

resultado = sumar(1,3,8,10);
console.log(resultado);


