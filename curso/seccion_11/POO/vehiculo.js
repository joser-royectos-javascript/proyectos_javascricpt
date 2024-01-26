class Vehiculo {
    constructor(marca, modelo, kilometraje, propietario, matricula){
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
        this.propietario = propietario;
        this.matricula = matricula;
    }
    checkIn(){
        console.log("He recogido el coche " + this.matricula);
    }
    cambiarAceite(){
        console.log("He cambiado el aceite de " + this.matricula);
    }
}
let cocheJorge = new Vehiculo("Porsche","Cayenne",5000,"Jorge","8841MJL");
cocheJorge.cambiarAceite();
