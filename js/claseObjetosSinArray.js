
let usuarioNuevo = ""
let usuarioAdminis
class Usuario {
    constructor(nombre, apellido, email, password, rol) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.password = password
        this.rol = rol
    }

    static crearUsuario() {


        let primerCampo = "nombre"
        let nombre
        nombre = this.verificacion(nombre, primerCampo)

        let segundoCampo = "apellido"
        let apellido
        apellido = this.verificacion(apellido, segundoCampo)

        let tercerCampo = "email"
        let email
        email = this.verificacion(email, tercerCampo)

        let cartoCampo = "password"
        let password
        password = this.verificacion(password, cartoCampo)

        let rol = email.includes("admin") ? 1 : 2
        console.log(rol)

        let usuarioNuevo = new Usuario(nombre, apellido, email, password, rol)

        usuarioAdminis = new Adminis(nombre, apellido, email, password, rol)
        console.table(usuarioAdminis)

        console.log("usuario creado")
        return usuarioNuevo
    }

    inicioSesion(mail, contraseña) {
        console.log(mail !== this.email || contraseña !== this.password);
        if (mail !== this.email || contraseña !== this.password) {
            console.log("usuario o contraseña erroneos");
            return false
        }

        console.log(`bienvenido otra vez ${this.nombre}`);
        return true
    }

    static verificacion(campoAVerificar, nombreCampoForm) {

        campoAVerificar = prompt("cual es tu " + nombreCampoForm + "?")
        campoAVerificar !== null ? campoAVerificar.trim().toLowerCase() : campoAVerificar = false

        while (campoAVerificar === false) {
            alert("no podes dejar campos en blanco");
            campoAVerificar = prompt("cual es tu " + nombreCampoForm + "?")
            campoAVerificar ? campoAVerificar.trim().toLowerCase() : campoAVerificar = false

        }
        return campoAVerificar
    }

    static iniciarSesion() {
        let verifica
        let email = prompt("ingrese email").trim().toLowerCase()
        let contra = prompt("ingrese contraseña").trim().toLowerCase()
        console.table(usuarioNuevo)

        if (usuarioNuevo.nombre != undefined) {

            verifica = usuarioNuevo.inicioSesion(email, contra)
            return verifica
        } else {
            console.log("no hay usuarios registrados en el sistema")
            return false
        }

    }

}

class Adminis extends Usuario {
    constructor(nombre, apellido, email, password, rol) {
        super(nombre, apellido, email, password, rol)
        this.admin = rol == 1 ? true : false
    }
    esAdmin() {
        this.admin === true ? console.log("Sesion iniciada como Administrador") : this.admin = false;
    }
}




/* usuarioNuevo = new Usuario // INSTANCIAMOS AQUI  */
function opcionesSesion() {
    let valor
    let verifica
    do {
        valor = Number(prompt("que operacion queres hacer?\n 2. registrarse \n 1.Iniciar Sesion \n  0. Salir"))
        switch (valor) {
            case 2:
                usuarioNuevo = Usuario.crearUsuario()
                console.table(usuarioNuevo)


                break
            case 1:
                verifica = Usuario.iniciarSesion()
                console.log(verifica);
                if (verifica) {

                    usuarioAdminis.esAdmin()
                }
                break
            case 0:
                console.log("gracias por usar nuestros servicios")

                break
            default:
                console.log("seleccione una opcion")
                break
        }

    } while (valor !== 0 || valor === null)
}


opcionesSesion()








/* 




ataqueDeLux = 200;
armaduraDeLux = 250;
vidaDeLux = 900;

ataqueDeMorgana = 150;
armaduraDeMorgana = 500;
vidaDeMorgana = 700;

ataqueDeSett = 100;
armaduraDeSett = 1500;
vidaDeSett = 1500;




function Personaje(ataq, arm, vid) {
    this.ataque = ataq
    this.armadura = arm
    this.vida = vid
}

let LUX = new Personaje(200, 250, 900);
const MORGANA = new Personaje(150, 500, 700);
const SETT = new Personaje(100, 1500, 1500);

function PersonajeEchizero(ataq, arm, vid, echi) {
    this.super = Personaje
    this.super(ataq, arm, vid)
    this.echizo = echi
}

///////// PersonajeEchizero.prototype = new Personaje(); 
///////// PersonajeEchizero.prototype.constructor = Personaje 
LUX = Object.create(PersonajeEchizero)

const LUX2 = new PersonajeEchizero(200, 250, 900, 200);

console.log(LUX);
console.log(LUX2); */

