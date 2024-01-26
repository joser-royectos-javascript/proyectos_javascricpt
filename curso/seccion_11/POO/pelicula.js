class Pelicula {
    constructor(titulo, director, año){
        this.titulo = titulo;
        this.director = director;
        this.año = año;
        this.premios = [];
    }
    saludar(){
        console.log(`Hola, soy ${this.titulo}`);
    }
}
let elresplandor = new Pelicula("El Resplandor","Kubrick",1979);
console.log(elresplandor);
elresplandor.saludar();
