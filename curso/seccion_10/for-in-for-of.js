let pelicula =  { 
    titulo : 'El resplandor', 
    genero : 'Terror',
    año : 1986,
    saludar : ()=>console.log("Soy x")
};

for (atributo in pelicula){//for-in recorre los atributos de un objeto
    console.log(atributo);
}

let peliculas = [pelicula, pelicula, pelicula];

for (item of peliculas){//for-of recorre un iterable
    console.log(item);
}