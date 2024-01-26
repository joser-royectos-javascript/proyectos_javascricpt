const TAMANYO_MINIMO = 5;

function carga(){
    let email = window.prompt("Dime tu dirección de email:");
    email = email.trim();
    console.info("Soy un info");
    console.error("Soy un error");
    console.warn("Soy un warning");
    console.log(`Has introducido ${email}`);

    if (email.length < TAMANYO_MINIMO) {
        console.error("Tamaño insuficiente");
    } else {
        console.warn("Tamaño suficiente");
    }
    //No contiene la palabra remo
    if (email.includes("remo")){
        console.error("Incluye remo");
    } else {
        console.warn("No incluye remo");
    }
    //No puede comenzar por la letra a
    if (email.toLocaleLowerCase().startsWith('a')){
        console.error("Incluye a");
    } else {
        console.warn("No incluye a");
    }

    //No puede terminar por txt
    if (email.toLocaleLowerCase().endsWith('txt')){
        console.error("Incluye txt");
    } else {
        console.warn("No incluye txt");
    }
}
