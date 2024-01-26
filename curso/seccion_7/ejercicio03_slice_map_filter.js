//Ejercicio
let mascotas = ['perrito.jpg','gatito.avi','loro.mp3', 'galápago.docx', 'gallo.jpg'];
//Obtener una lista con los nombres de las mascotas que tienen la extensión jpg
//La nueva lista no debe tener la extensión, solo los nombres.
//Los nombres deben estar en mayúsculas.
//Utilizar slice, map y filter.
mascotas = mascotas.map((mascota)=>mascota.toUpperCase());
mascotas = mascotas.filter((mascota)=>mascota.endsWith(".JPG"));
mascotas = mascotas.map((mascota)=>mascota.slice(0,mascota.lastIndexOf(".")));
console.log(mascotas);

//Enlazando métodos

mascotas = ['perrito.jpg','gatito.avi','loro.mp3', 'galápago.docx', 'gallo.jpg'];

mascotas = mascotas
    .map((mascota)=>mascota.toUpperCase())
    .filter((mascota)=>mascota.endsWith(".JPG"))
    .map((mascota)=>mascota.slice(0,mascota.lastIndexOf(".")));

console.log(mascotas);

//Solución Michelangelo
mascotas = ['perrito.jpg','gatito.avi','loro.mp3', 'galápago.docx', 'gallo.jpg'];

mascotas = mascotas
    .filter((m)=>m.endsWith(".jpg"))
    .map((m)=>m.slice(0,m.lastIndexOf(".")).toUpperCase());

console.log(mascotas);