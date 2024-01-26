//Crear una función
//Recibe como argumento un objeto Película (con 3 atributos)
//Recibe como argumento nombre de fichero (por defecto es 'pelicula.txt')
//Escribir en el fichero los datos de la Película
const fs = require('node:fs');

function guardarPelicula(pelicula, fichero='pelicula.txt'){
    //const contenido = `Título:${pelicula.titulo}. Director:${pelicula.director}. Sinopsis:${pelicula.sinopsis}`;
    const contenido = JSON.stringify(pelicula);
    fs.writeFile(`./${fichero}`, contenido, err=> {//writeFile es asíncrono
        if (err){
            console.error(err);
        } else {
            console.log("OK");
        }
    });
}

let pelicula = {
    titulo : 'Titanic',
    director : 'James Cameron',
    sinopsis : 'Un barco que se hunde.'
}

//guardarPelicula(pelicula, 'titanic.txt');
guardarPelicula(pelicula);

