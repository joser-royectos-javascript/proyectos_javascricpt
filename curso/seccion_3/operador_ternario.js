let categoria = "Senior";
let salario;//Será 20.000 si no es senior; 30.000 si es senior

if (categoria=="Senior"){
    salario=30000;
} else {
    salario=20000;
} 
console.log(salario);

let salario2;
salario2 = (categoria=="Senior") ? 30000 : 20000;
console.log(salario2);


//Crear dos funciones: una (calculando) muestra el texto ("Calculando...") y 
//la otra (reduciendo) muestra el texto ("Reduciendo...")
//La primera función devuelve un 5, la segunda función devuelve un 3
//La variable resultado tomará el valor de la función calculando si el número de la variable "dato" es > 10.
//La variable resultado tomaré el valor de la función reduciendo si el número de la variable "dato" es <= 10.
//Utilizar expresiones ternarias

let dato = 15;
let resultado = undefined;
function calculando(){
    console.log("Calculando...");
    return 5;
}
function reduciendo(){
    console.log("Reduciendo...");
    return 3;
}
resultado = (dato > 10) ? calculando() : reduciendo();