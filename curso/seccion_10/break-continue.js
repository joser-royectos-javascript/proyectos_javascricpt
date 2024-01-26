let candidato1 = {
    edad : 25,
    ingles : false,
    japones : false
}
let candidato2 = {
    edad : 21,
    ingles : true,
    japones : false
}
let candidato3 = {
    edad : 38,
    ingles : true,
    japones : true
}
let candidato4 = {
    edad : 50,
    ingles : true,
    japones : true
}
let candidatos = [candidato1, candidato2, candidato3, candidato4];
for (var candidato of candidatos) {
    console.log("Paso 1");
    if (candidato.edad<22){
        continue;
    }
    console.log("Paso 2");
    if (candidato.ingles==false){
        continue;
    }
    console.log("Paso 3");
    if (candidato.japones==true){
        break;
    } else {
        candidato == undefined;
    } 
};
console.log("El candidato es:" + candidato.edad);