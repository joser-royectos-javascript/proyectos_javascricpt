function escribirEmail(alumno){
    console.log(`Estimad@ ${alumno.nombre}, confirmamos que su dirección de correo es ${alumno.email}`);
}

let alumnos = [
    { nombre : "Fernando", email : "fernando@gmail.com"},
    { nombre : "Jesús", email : "jesus@hotmail.com"}
];

alumnos.map(escribirEmail);
