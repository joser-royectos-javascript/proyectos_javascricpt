function esVerdadero(){
    console.log("fEs verdadero");
    return true;
}
function esFalso(){
    console.log("fEs falso");
    return false;
}

//Ejecuta las primera expresión y detiene la evaluación porque ya se sabe que es verdadero
if (esVerdadero() || esFalso()) {
    console.log("OK1")
} else {
    console.log("KO1")
}

//Ejecuta las primera expresión y detiene la evaluación porque ya se sabe que es falso
if (esFalso() && esVerdadero()) {
    console.log("OK2")
} else {
    console.log("KO2")
}

//Ejecuta las dos expresiones del if y después evalúa la condición
if (esVerdadero() | esFalso()) {
    console.log("OK3")
} else {
    console.log("KO3")
}

//Ejecuta las dos expresiones del if y después evalúa la condición
if (esFalso() & esVerdadero()) {
    console.log("OK4")
} else {
    console.log("KO4")
}

