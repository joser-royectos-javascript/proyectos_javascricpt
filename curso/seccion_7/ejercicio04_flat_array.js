let datos = [3, "hola", true, ()=>{console.log("Soy una función")}, [3, 8]];
console.log(datos[1]);
datos[3]();
console.log(datos[4][1]);
datos.forEach(element => {
    console.log(element);
});
datos = datos.flat();//Genera una versión 'aplanada' del array
datos.forEach(element => {
    console.log(element);
});