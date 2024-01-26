let numeros = [1, 3, 7, 9, 11];
let letras = ['a','b','c'];

//some -> Indica si algún elemento de la lista cumple con la condición
console.log(numeros.some(function(n) {
    return (n%2)==0;//El número es par
}));

//concat -> Concatena arrays
let todo = numeros.concat(letras);
console.log(todo);

//includes -> Indica si existe o no un elemento en un array
console.log(numeros.includes(8));
console.log(numeros.includes(7));

//join -> Genera una cadena con todos los elementos
let resultado = numeros.join();
console.log(resultado);//1,3,7,9,11

//join -> Genera una cadena con todos los elementos
resultado = numeros.join("-");
console.log(resultado);//1-3-7-9-11

numeros.fill(5);
console.log(numeros);//[5, 5, 5, 5, 5]