const TIEMPO_ESPERA = 3000;

setTimeout(()=>{
    let pie = document.querySelector("#pie-pagina");
    pie.style.background = "#FF0000";
},TIEMPO_ESPERA/2);


setTimeout(desaparecer,TIEMPO_ESPERA);
function desaparecer(){
    let pie = document.querySelector("#pie-pagina");
    pie.style.bottom = "-5em";
}
