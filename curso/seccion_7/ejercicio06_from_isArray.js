let miarray = [];
miarray.splice(1,0,"hola");

console.log(Array.isArray(miarray));//true-Determina si el argumento es un array
console.log(Array.isArray(3));//false