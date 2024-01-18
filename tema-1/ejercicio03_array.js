var diasSemana = ['Martes','Miércoles','Jueves','Viernes','Sábado'];
let numeroDias = diasSemana.length;//Obtener la longitud
diasSemana.push("Domingo");//Añadir al final
diasSemana.unshift("Lunes");//Añadir al inicio
console.log(diasSemana);

let ultimoDia = diasSemana[diasSemana.length-1];
console.log(ultimoDia);
delete diasSemana[diasSemana.length-1];//El delete asigna undefined a la posición indicada
console.log(diasSemana);//['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', …]

//Restauro el domingo
diasSemana[diasSemana.length-1]="Domingo";

//pop - extrae del final 
console.log(diasSemana);//['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
var ultimo = diasSemana.pop();
console.log(ultimo);//Domingo
console.log(diasSemana);//['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

//shift - extrae del principio
var primero = diasSemana.shift();
console.log(primero);//Lunes
console.log(diasSemana);//['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
console.log("FIN");