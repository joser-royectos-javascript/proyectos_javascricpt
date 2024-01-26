for (let i=0;i<10;i++){
    console.log(i);
}
///console.log(i);//error porque la variable i está en un contexto local

let dias = ['Lunes','Martes','Miércoles','Jueves'];
for (var i=0;i<dias.length;i++){
    if (dias[i].includes('z')){
        break;
    }
}
if (i==dias.length){//Al declararse i con var, es visible fuera del bucle.
    console.log("No encontrado"); 
} else {
    console.log("Encontrado");
}

/*
for (;;){
    //Bucle infinito
}
*/
function saludar(){
    console.log("Hola");
}

for (var i=0;i<10;i++,saludar());//Se ejecuta el incremento y la llamada a saludar

let contador = 0;
//while puede no ejecutarse ninguna vez
while (contador < 10){
    contador++;
    console.log(contador);
}

//do-while se ejecuta al menos una vez
do {
    contador++;
    console.log(contador);
} while (contador < 20);

console.log("SWITCH");
let edad = 18;
switch (edad) {
    case 18:
        console.log(18);
        break;//Sin break, cuando se ejecute esta opción se ejecuta la siguiente
    case 35:
        console.log(35);
        break;
    case 65:
        console.log(65);
        break;
    case 66:
        console.log(66);
        break;//Opcional
    default:
        console.log('Default');
        break;//Innecesario
} 


