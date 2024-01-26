let datos = [3, "hola"];
datos.splice(1,0,"Insertado");//Inserta en la posición 1 (el 0 es de borrar)
console.log(datos);

datos.splice(1,1);//Elimina el elemento que está en la posición n
console.log(datos);

datos.splice(1,1,"Insertado");//Reemplazado (es más fácil asignar)
console.log(datos);
