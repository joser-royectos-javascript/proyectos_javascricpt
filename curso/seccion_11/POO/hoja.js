class Hoja {
    constructor(imagen, x, y, velocidad, tamaño, yMax){
        this.imagen = imagen;
        this.x = x;
        this.y = y;
        this.velocidad = velocidad;
        this.tamaño = tamaño;
        this.yMax = yMax;
    }
    mover(){
        this.y = this.y + this.velocidad;
        if (this.y > this.yMax){
            this.y = 0;
        }
        console.log(this.y);
    }
    arrancar(){
        setInterval(()=>this.mover(),17);
    }
}
let hoja1 = new Hoja("....jpg",100,0,1,100);
hoja1.arrancar();
console.log("Fin");

