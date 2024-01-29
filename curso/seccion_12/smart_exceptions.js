class DefinitivoTerribleHorribleError{
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.time = new Date().getTime();
    }
    ejecutarAccion(){
        console.warn(`A la atención de RRHH: DESPEDIR A ${this.email}`);
    }
}


function accesoAlSistemaCriticoYMasSeguroDeLaEmpresa(email, password){
    if (email==="jefazo@gmail.com" && password==='patata'){
        console.log("palante");
    } else {
        throw new DefinitivoTerribleHorribleError(email, password);
    } 
}

try {
    accesoAlSistemaCriticoYMasSeguroDeLaEmpresa("becario@gmail.com","patata");
} catch (e) {
    if (e instanceof DefinitivoTerribleHorribleError){
        e.ejecutarAccion();
    } else {
        console.error('Ha ocurrido algo:' + e.message);
    }
}
