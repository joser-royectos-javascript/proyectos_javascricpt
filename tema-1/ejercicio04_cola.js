function tarea1(){
    console.log("Realizando tarea 1...");
}

function tarea2(){
    console.log("Realizando tarea 2...");
}

function tarea3(){
    console.log("Realizando tarea 3...");
}

let cola = [];
cola.push(tarea1);
cola.push(tarea2);
cola.push(tarea3);

while (cola.length>0){
    let tarea = cola.shift();
    tarea();
}

console.log(cola);

function sumar(s1, s2){
    return s1+s2;
}