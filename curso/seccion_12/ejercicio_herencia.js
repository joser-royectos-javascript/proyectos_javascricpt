/*
Clase: FiguraGeométrica (atributo nombre)
Clase derivadas o hijas siguientes:
- Cuadrado
- Triángulo
- Rectángulo
- Círculo

- Métodos:
-- calcularÁrea
*/
class FiguraGeometrica {
    constructor(nombre){
        this.nombre = nombre;
    }
    calcularArea(){
        throw new Error("El cálculo del área no está implementado");
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(nombre,base,altura){
        super(nombre);
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        let area = (this.base * this.altura)/2;
        return area;
    }
}
class Rectangulo extends FiguraGeometrica {
    constructor(nombre, alto, ancho){
        super(nombre);
        this.alto=alto;
        this.ancho=ancho;
    }
    calcularArea(){
        return this.alto * this.ancho;
    }
}
class Cuadrado extends Rectangulo{
    constructor(nombre, lado){
        super(nombre, lado, lado);
    }
}
class Circulo extends FiguraGeometrica{
    constructor(nombre, radio){
        super(nombre);
        this.radio = radio;
    }
    calcularArea(){
        let area = Math.PI * this.radio ** 2;
        return area;
    }
}

let t1 = new Triangulo("Triángulo",3,2);
console.log(t1.calcularArea());

let r1 = new Rectangulo("Rectángulo",2,3);
console.log(r1.calcularArea());

let c1 = new Cuadrado("Cuadrado",2);
console.log(c1.calcularArea());

let cir1 = new Circulo("Círculo", 10);
console.log(cir1.calcularArea());