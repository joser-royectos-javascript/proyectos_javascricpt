const OPACIDAD_ATENUADA = 0.25;
const OPACIDAD_MAXIMA = 1;

function cambiarOpacidadDeClase(clase, opacidad){
    let todasHabitaciones = document.querySelectorAll(clase);
    todasHabitaciones.forEach(habitacion => {
        habitacion.style.opacity=opacidad;
    });     
}

function restaurarEstado(){
    cambiarOpacidadDeClase(".room",OPACIDAD_ATENUADA); 
}

function verTodo(){
    console.log("Ver todo");
    restaurarEstado();
    cambiarOpacidadDeClase(".room",OPACIDAD_MAXIMA);
}
function verOfertas(){
    console.log("Viendo ofertas");
    restaurarEstado();
    cambiarOpacidadDeClase(".oferta",OPACIDAD_MAXIMA);
}


//Asignación de función 'normal' a través del listener
let botonOfertas = document.querySelector("#botonOfertas")
//botonOfertas.addEventListener("click",verOfertas());//mal--> Ejecuta función pero no la vincula
botonOfertas.addEventListener("click",verOfertas);//Correcto


//Asignación de función anónima a través del listener
let botonDobles = document.getElementById("botonDobles");
botonDobles.addEventListener("click", function(){
    console.log("Ver dobles");
    restaurarEstado();
    cambiarOpacidadDeClase(".cama-doble",OPACIDAD_MAXIMA);
})

