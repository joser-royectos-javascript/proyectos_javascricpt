//Pre y post incremento
let i=10;
if (i++==11){//Comparar antes de incrementar
    console.log(11);//No lo muestra
}
i=10;
if (++i==11){//Primero incrementa y luego compara
    console.log(11);//Lo muestra
}