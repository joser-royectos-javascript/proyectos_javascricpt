let ficheros = ["Alumno 1","Alumno 2","Alumno 3","Alumno 4"];

let dosPrimeros = ficheros.slice(0,2);
console.log(dosPrimeros);
rodaja = ficheros.slice(2,);//Desde la posición 2 hasta el final
console.log(rodaja);
rodaja = ficheros.slice();//Todos
console.log(rodaja);
rodaja = ficheros.slice(undefined,3);//Los tres primeros
console.log(rodaja);


let fichero = "selfie.jpg";
let posicionPunto = fichero.lastIndexOf(".");
console.log(fichero.slice(posicionPunto+1,));//jpg
console.log(fichero.slice(0,posicionPunto));//selfie

console.log(fichero.slice(-3,))//jpg --> Funcionará siempre que la extensión tenga 3 caracteres

//Ejercicio
let mascotas = ['perrito.jpg','gatito.avi','loro.mp3', 'galápago.docx', 'gallo.jpg'];
//Obtener una lista con los nombres de las mascotas que tienen la extensión jpg
//La nueva lista no debe tener la extensión, solo los nombres.
//Los nombres deben estar en mayúsculas.
//Utilizar slice, map y filter.




