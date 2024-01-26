function sumar(numeros){
    const resultado = numeros.reduce((a,b)=>a+b);
    return resultado;
}

const resultado = sumar([3,8,1,2]);
console.log(resultado);

function sumarGuay(...numeros){
    const resultado = numeros.reduce((a,b)=>a+b);
    return resultado;
}

const resultadoGuay = sumarGuay(3,8,1,2);
console.log(resultadoGuay);