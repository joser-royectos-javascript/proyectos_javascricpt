/*
Crear un función para verificar que el email recibido como argumento es correcto:
- Es correcto si tiene una arroba @.
- Es correcto si tiene una longitud de más de 5 caracteres.
Si alguna de las reglas no se cumple, se lanza una excepción con el operador throw
*/
function checkEmail(email){
    const CARACTER_OBLIGATORIO = '@';
    const LONGITUD_MINIMA = 5;
    //Comprobar si es string
    if (typeof(email)!='string'){
        throw "No es una cadena";
    }
    //Comprobar que tiene una @ (versión Rubén)
    if (!email.includes(CARACTER_OBLIGATORIO)){
        throw "No incluye arroba;"
    }
    //Comprobar que tiene una @ (versión Gema)
    if (email.indexOf(CARACTER_OBLIGATORIO)==-1){
        throw "No incluye arroba;"
    }
    //Comprobar que la longitud > LONGITUD_MINIMA caracteres
    if (email.length < LONGITUD_MINIMA) {
        throw "Tamaño insuficiente";
    }
}

console.log("Comienza el proceso");
checkEmail("a@bbcd");

