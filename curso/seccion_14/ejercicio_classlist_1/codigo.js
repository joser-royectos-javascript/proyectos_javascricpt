const MINIMO = 5;
const OPTIMO = 8;
document.querySelector("#identificador").addEventListener("input",()=>{
    const iNombre = document.querySelector("#identificador");
    const nombre = iNombre.value;
    iNombre.classList.remove("error1");
    iNombre.classList.remove("error2");
    iNombre.classList.remove("ok");
    if (nombre.trim().length < MINIMO){
        iNombre.classList.add("error2");
    } else if (nombre.trim().length < OPTIMO){
        
        iNombre.classList.add("error1");
    } else if (nombre.trim().length >= OPTIMO){
        iNombre.classList.remove("error1");
        iNombre.classList.remove("error2");
        iNombre.classList.add("ok");
    }
});