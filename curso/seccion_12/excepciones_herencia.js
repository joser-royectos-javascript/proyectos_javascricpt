class ErrorIdentificador extends Error {
}
class ErrorIdentificadorFatal extends ErrorIdentificador{
}

try {
    throw new String("Un error de string");
    //throw new Error("Un error");
    //throw new ErrorIdentificador("Error de identificador");
    //throw new ErrorIdentificadorFatal("Error de identificador fatal");
} catch (e){
    if (e instanceof ErrorIdentificadorFatal){
        //En primer lugar se evalúa lo más específico
        console.error("Nivel 1:"+e.message);
    } else if (e instanceof ErrorIdentificador) {
        console.error("Nivel 2:"+e.message);
    } else if (e instanceof Error){
        //En último lugar se evalúa lo más genérico 
        console.error("Nivel 3:"+e.message);
    } else {
        //En otro caso
        console.error("Nivel final:" + e);
    }
}