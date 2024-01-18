let alumno1 = {
    nombre : "Mercedes",
    edad : 25
}

let mascota1 = {
    nombre : "Naranjito",
    forma : "Esférica",
    especie : "Naranja"
}
/*
    OPERADOR in --> Indica si un atributo está en un objeto
*/
console.log(mascota1);
mascota1.peso = 15;
console.log(mascota1);

if ("peso" in mascota1) console.log(mascota1.peso); else console.log("*No tiene peso");

if ("edad" in mascota1) {
    console.log(mascota1.edad);//undefined
} else {
    console.log("No tiene edad");
}

/*
    OPERADOR delete --> Elimina un atributo de un objeto
*/
delete mascota1.peso;
console.log("peso" in mascota1 ? mascota1.peso : "No tiene peso");
console.log(mascota1);