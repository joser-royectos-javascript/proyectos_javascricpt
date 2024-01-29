class Enemigo {
    constructor(nombre, salud, x, y){
        this.nombre = nombre;
        this.salud = salud;
        this.vivo = true;
        this.x = x;
        this.y = y;
    }
    atacar(){
        console.log(`Soy ${this.nombre} y estoy atacando`);
    }
    recibirDanyo(cantidad){
        console.log(`Soy ${this.nombre} y estoy recibiendo daño`);
        this.salud = this.salud - cantidad;
        if (this.salud <= 0){
            this.morir();
        } 
    }
    morir(){
        console.log(`Soy ${this.nombre} y acabo de morir`);
        console.log(`Soy ${this.nombre}: desparezco y suena una explosión`)
        this.vivo = false;
    }
}
class EnemigoMovil extends Enemigo {
    desplazar(deltaX,deltaY){//Es un método nuevo
        console.log(`Soy ${this.nombre} y me estoy deplazando`);
        this.x+=deltaX;
        this.y+=deltaY;
    }
    morir(){//Sobreescritura de método
        console.log(`Soy ${this.nombre}: estoy muriendo mientras sufro gran dolor y aparece humo`)
        super.morir();//Ejecuta la versión de la clase padre del método morir
    }
}
let pinguino = new Enemigo("Pinguino", 50, 10, 10);
let joker = new EnemigoMovil("Joker",100, 10, 10);
joker.atacar();
pinguino.atacar();
joker.desplazar(1,-1);
//pinguino.desplazar(1,1);//Error

console.log(pinguino instanceof Enemigo);//true
console.log(pinguino instanceof EnemigoMovil);//false
console.log(joker instanceof Enemigo);//true
console.log(joker instanceof EnemigoMovil);//true

pinguino.recibirDanyo(150);
joker.recibirDanyo(150);
