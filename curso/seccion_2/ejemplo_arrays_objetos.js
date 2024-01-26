let idioma1 = {
    idioma : "Inglés",
    nivel : 2
}

let idioma2 = {
    idioma : "Francés",
    nivel : 3
}

let alumno0 = {
    nombre : "Rubén",
    edad : 42,
    ciudad_nacimiento: "Toledo",
    idioma : idioma2
} 

let alumno1 = {
    nombre : "Sara",
    edad : 18,
    ciudad_nacimiento : "Cartagena",
    idioma : {
        idioma : "Alemán",
        nivel : 1
    }
}

let alumno2 = {
    nombre : "Francisco",
    edad : 38,
    ciudad_nacimiento : "Madrid",
    idioma : "Chino",
    nivel : 2
} 

console.log(alumno0.nombre);
console.log(alumno0.edad);
console.log(alumno0.ciudad_nacimiento);
console.log(alumno0.idioma.idioma);