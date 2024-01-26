let lista = [3, 8, -1, 9, 5];
lista.sort();
console.log(lista);//[-1, 3, 5, 8, 9]

lista = ["tres", "ocho", "menos uno", "nueve", "cinco"];
lista.sort();
console.log(lista);//['cinco', 'menos uno', 'nueve', 'ocho', 'tres']

lista = ["tres", "ocho", "menos uno", "nueve", "cinco", "Amarillo"];
lista.sort();
console.log(lista);//['Amarillo', 'cinco', 'menos uno', 'nueve', 'ocho', 'tres']

lista = ["tres", "Ocho", "menos uno", "nueve", "cinco", "amarillo"];
lista.sort();
console.log(lista);//['Ocho', 'amarillo', 'cinco', 'menos uno', 'nueve', 'tres']

lista = ["tres", 8, "menos uno", "nueve", "cinco", "amarillo", true, false];
lista.sort();
console.log(lista);


