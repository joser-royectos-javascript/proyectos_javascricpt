function saludar(numero){
    console.log("Hola " + numero);
}

let j=0;
//El operador , permite ejecutar después de cada iteracción un número indeterminado de expresiones
for (let i=0 ; i<10 ; i++ , saludar(i), j++){
    console.log(i);
}
console.log(j);