/*
Hacer una función que guarde en un fichero la dirección de email
y la constraseña de un usuario. Si la dirección de email no contiene @ 
lanzamos excepción; si el tamaño de la contraseña es <6, lanzamos error.
El nombre del fichero será el texto anterior a la @ de la dirección email
con la extesión user.
*/
//- Función que guarde email y password.
//- Hay que validar el email y la password

const fs = require('node:fs');

class EmailIncorrectoError {
}
class TamañoPasswordInsuficienteError {
}

function guardarCredenciales(email, password){
    const TAMAÑO_MINIMO = 6;
    if (!email.includes('@')) {
        throw new EmailIncorrectoError();
    }
    if (password.length<TAMAÑO_MINIMO){
        throw new TamañoPasswordInsuficienteError();
    }
    try {
        let nombreArchivo = email.substring(0,email.indexOf('@'));
        fs.writeFileSync(nombreArchivo, email+":"+password);
    } catch (e){
        console.error("Ha ocurrido al tratar de escribir el fichero:" + e.message);
        throw e;
    }
}

try {
    guardarCredenciales("fernando.paniagua@gmail.com","123456");
    console.log("El proceso ha terminado satisfactoriamente");
} catch (e){
    if (e instanceof EmailIncorrectoError){
        console.error("Email incorrecto");
    } else if (e instanceof TamañoPasswordInsuficienteError){
        console.error("Tamaño de password insuficiente");
    } else {
        console.error(e.message);
    }   
} 