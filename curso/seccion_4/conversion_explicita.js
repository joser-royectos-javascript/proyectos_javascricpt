//Funciones parseInt y parseFloat

//let x = "10";//OK
//let x = "10.8";//OK, en el parseInt se pierden los decimales
//let x = "Ocho";//Genera NaN
//let x = "-8";//OK
let x = ".8";//El parseInt genera un NaN
console.log(typeof x);
console.log(x);
let y = parseInt(x);
console.log(typeof y);
console.log(y);
let z = parseFloat(x);
console.log(typeof z);
console.log(z);

//Método toString
let edadNumerica = 18;
let edad = edadNumerica.toString(); 
console.log(typeof edad);
console.log(edad);
