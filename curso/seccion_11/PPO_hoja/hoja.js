class Hoja {
    constructor(imagen, x, y, velocidad, tamaño, yMax){
        this.imagen = imagen;
        this.x = x;
        this.y = y;
        this.velocidad = velocidad;
        this.tamaño = tamaño;
        this.yMax = yMax;
        this.inicializar();
    }
    inicializar(){
        this.divBalon = document.querySelector("#div-hoja");
        let imgBalon = document.querySelector("#img-hoja");
        imgBalon.src=this.imagen;
        imgBalon.width=this.tamaño;
    }
    mover(){
        this.y = this.y + this.velocidad;
        if (this.y > this.yMax){
            this.y = 0;
        }
        this.pintar();
    }
    arrancar(){
        setInterval(()=>this.mover(),17);
    }
    pintar(){
        this.divBalon.style.top=this.y+"px";
        this.divBalon.style.left=this.x+"px";
    }
}
let urlBalon = "https://i.pinimg.com/originals/42/77/ae/4277ae71a295e64b2148519aca4042cd.png";
let hoja1 = new Hoja(urlBalon, Math.random()*window.innerWidth, 0, 1, Math.random()*100, window.innerHeight);
hoja1.arrancar();
