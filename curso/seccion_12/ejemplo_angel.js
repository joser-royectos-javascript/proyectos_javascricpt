//Construir una jerarquía empresa->departamentos->empleados
class Empresa {
    constructor(nombre){
        this.nombre = nombre;
        this.departamentos = [];
    }
    addDepartamento(departamento){
        this.departamentos.push(departamento);
    }
    mostrar(){
        console.log(this.nombre);
        this.departamentos.forEach(departamento => {
            departamento.mostrar();
        });
    }
}
class Departamento {
    constructor(nombre){
        this.nombre = nombre;
        this.empleados = [];
    }
    addEmpleado(empleado){
        this.empleados.push(empleado);
    }
    mostrar(){
        console.log("Departamento:"+this.nombre);
        this.empleados.forEach(empleado => {
            empleado.mostrar();
        });
    }
}
class Empleado {
    constructor(nombre){
        this.nombre = nombre;
    }
    mostrar(){
        console.log("Empleado:"+this.nombre);
    }
}
let empresa = new Empresa("Empresa 1");
let contabilidad = new Departamento("Contabilidad");
let rrhh = new Departamento("Recursos humanos");
let marketing = new Departamento("Marketing");
let angel = new Empleado("Ángel");
let ruben = new Empleado("Rubén");
let andres = new Empleado("Andrés");
let juan = new Empleado("Juan");
rrhh.addEmpleado(angel);
rrhh.addEmpleado(ruben);
empresa.addDepartamento(rrhh);
marketing.addEmpleado(andres);
empresa.addDepartamento(marketing);
contabilidad.addEmpleado(juan);
empresa.addDepartamento(contabilidad);

empresa.mostrar();