class Empleado {
    constructor(nombre,edad,email){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
}
Empleado.prototype.toString = function saluda(){
    return `Hola, soy ${this.nombre}, tengo ${this.edad} años y mi email es ${this.email}`;
}

let e1 = new Empleado("Rubén", 42, "ruben@hotmail.com");

console.log(""+e1);
    