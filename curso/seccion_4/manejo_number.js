let ingresos = 10000.784378;
let ingresosTruncados = ingresos.toFixed();//Elimina los decimales redondeando
console.log(ingresosTruncados);//10001

let ingresosRedondeados = ingresos.toFixed(2);
console.log(ingresosRedondeados);//10000.78

let x = 1/0;
console.log(x);//Infinity

let y = 1 - "dos";
console.log(y);
//En expresión 'normal'
if (isNaN(y)==true){
    console.log("Es isNaN");
} else {
    console.log("Es un número");
}

//En ternaria
console.log(isNaN(y) ? "Es isNaN" : "Es un número");
