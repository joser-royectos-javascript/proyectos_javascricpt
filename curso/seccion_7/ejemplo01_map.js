function convertirAMayusculas(palabra){
    console.log("Convirtiendo a mayúsculas");
    let palabraMayusculas =  palabra.toUpperCase();
    return palabraMayusculas;
}

let lista = ["palabra1", "palabra2", "palabra3"];

//Modo tracicional
for (let i=0;i<lista.length;i++){
    lista[i] = convertirAMayusculas(lista[i]);
}
console.log(lista);

//Modo map con función 'con nombre'
lista = ["palabra1", "palabra2", "palabra3"];
lista = lista.map(convertirAMayusculas);
console.log(lista);

//Modo map con función anónima
lista = ["palabra1", "palabra2", "palabra3"];
lista = lista.map(function(elemento){
    elemento = elemento.toUpperCase();
    return elemento;
});
console.log(lista);



