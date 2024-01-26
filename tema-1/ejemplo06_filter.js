let dias = ['Lunes','Martes','Miércoles','Jueves','Viernes'];

//Opción 1 - Función anónima
let diasM = dias.filter(function(dia){
    return dia.toUpperCase().startsWith('M');
});

console.log(diasM);

//Opción 2 - Función arrow
let diasR = dias.filter(dia => {
    return dia.toUpperCase().includes('R');
});

console.log(diasR);