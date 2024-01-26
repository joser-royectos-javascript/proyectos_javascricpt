const OPACIDAD_ATENUADA = 0.25;
const OPACIDAD_MAXIMA = 1;

function restaurarEstado(){
    let todasHabitaciones = document.querySelectorAll(".room");
    todasHabitaciones.forEach(habitacion => {
        habitacion.style.opacity=OPACIDAD_ATENUADA;
    }); 
}

function verTodo(){
    restaurarEstado();
    let todasHabitaciones = document.querySelectorAll(".room");
    todasHabitaciones.forEach(habitacion => {
        habitacion.style.opacity=OPACIDAD_MAXIMA;
    });
}

function verOfertas(){
    restaurarEstado();
    let habitacionesOferta = document.querySelectorAll(".oferta");
    for (let i=0;i<habitacionesOferta.length; i++){
        habitacionesOferta[i].style.opacity=OPACIDAD_MAXIMA;
    }
}


//Asignación de función 'normal' a través del listener
let botonOfertas = document.querySelector("#botonOfertas")
//botonOfertas.addEventListener("click",verOfertas());//mal--> Ejecuta función pero no la vincula
botonOfertas.addEventListener("click",verOfertas);//Correcto


//Asignación de función anónima a través del listener
let botonDobles = document.getElementById("botonDobles");
botonDobles.addEventListener("click", function(){
    restaurarEstado();
    let habitacionesDobles = document.querySelectorAll(".cama-doble");
    habitacionesDobles.forEach(habitacion => {
        habitacion.style.opacity=OPACIDAD_MAXIMA;
    });
})

