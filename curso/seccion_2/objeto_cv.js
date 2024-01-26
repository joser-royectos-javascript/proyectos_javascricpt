let miCV = {
    nombre : "Fernando",
    direccion_postal : "Alcorcón",
    email : "fernando@gmail.com",
    titulos_academicos : [
        {
            titulo: "JavaScript"
        },
        {
            titulo: "Ionic"
        }
    ],
    idiomas : [
        {
            idioma: "Inglés",
            nivel: 1
        },
        {
            idioma: "Alemán",
            nivel: 0
        }
    ]
} 
console.log(miCV.idiomas[1].nivel);