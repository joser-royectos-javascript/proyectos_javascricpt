let objeto  = {
    nombre : "El nombre",
    edad : 50, 
    altura : 1.70,
    saludar : () => { console.log("Hola")}
}

let atributos = Object.keys(objeto);
atributos.forEach(element => {
    console.log(element);
});
//Salida:
/*
nombre
edad
altura
saludar
*/