let pelicula = {
    titulo: "Alien",
    director: "Ridley Scott"
}
//let otrapelicula = pelicula;//Asignación de referencia
let otrapelicula = {...pelicula};//Crea una copia del objeto película y lo asigna
otrapelicula.titulo="Gladiator";//Esta modificación afecta los dos elementos

console.log(JSON.stringify(pelicula));
console.log(JSON.stringify(otrapelicula));