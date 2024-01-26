const hoja = document.querySelector("#div-hoja");
const DELTA = 1;
const POS_Y_INICIAL = -100;
var x=Math.random()*window.innerWidth;
var y=POS_Y_INICIAL;
setInterval(()=>{
    hoja.style.top = (y+=DELTA)+"px";
    if (y>window.innerHeight){
        y=POS_Y_INICIAL;
        x = Math.random()*window.innerWidth;   
        hoja.style.left = x+"px"; 
    }
},17);

setTimeout(function(){
    document.querySelector("footer").style.bottom="-5em";
},5000);