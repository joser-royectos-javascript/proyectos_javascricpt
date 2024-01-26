let dias = ['Lunes','Martes','Miércoles'];

console.log(dias[4]);//undefined, en lugar de indicar que es nulo

delete dias[1];
console.log(dias);//['Lunes', …, 'Miércoles']
console.log(dias[1]);//undefined