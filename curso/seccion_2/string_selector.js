function liberar(){
    //Paso 1. Obtener la referencia al input
    let elinput = document.getElementById("email");
    //Paso 1. Obtener la referencia al div
    let eldiv = document.querySelector("#divtexto");
    //Paso 2. Modificar el contenido
    eldiv.innerHTML = elinput.value;
}

function cambiarColor(){
    console.log("Cambiando color...");
    const eldiv = document.querySelector("#divtexto");
    const inputcolor = document.querySelector("#inputcolor");
    eldiv.style.color = inputcolor.value;
}