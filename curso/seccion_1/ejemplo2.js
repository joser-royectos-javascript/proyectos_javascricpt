"use strict"

console.log("Soy el ejemplo dos");

//Declaración de variables

{
    var x = 10;//Esta variable es de ámbito global
    console.log(x);    
}
{
    let y = 11;//Esta variable es de ámbito local
    console.log(y);
}
console.log(x);
//console.log(y);//Error al estar fuera de ámbito

//let 1 = 1;
let a1 = 1;
let _1 = 1;
let A1 = 1;
let $1 = 1;
let nombrePaciente = "Ramón";
let _ = true;
console.log(_);

//TIPOS DE DATOS
//string
let nombre = "Ángel";
let apellido ='Montenegro';
let frase = "Me gustan las 'gambas extremeñas'";
console.log(typeof(frase));

//number
let altura = 1.70;
let peso = 70;
console.log(typeof(altura));
console.log(typeof(peso));

//boolean
let dormido = true;
console.log(typeof(dormido));

//bigint
let salario = 1783838338n;
console.log(typeof(salario));

//strings
console.log(frase);
frase = frase.concat("texto concatenado");
console.log(frase);

//Interpolación
let equipo1 = "Real Madrid";
let equipo2 = "Atlético de Madrid";
let goles1 = 2;
let goles2 = 2;

//Sobrecarga de operadores
console.log(equipo1 + goles1);//Real Madrid2
console.log(goles1 + goles2);//4

