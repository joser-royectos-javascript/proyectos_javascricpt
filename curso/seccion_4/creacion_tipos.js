let x = 3.5;//x es un number
console.log(typeof x);

let y = 8 - "1";//y es un number
console.log(typeof y);

let z = new Number(10);
console.log(typeof z);//object
console.log(z instanceof Number);//true

let verdadero = new Boolean(true);

let cadena = new String("Esto es una cadena");
console.log(cadena);

let salario = BigInt(10000);
console.log(typeof salario);
