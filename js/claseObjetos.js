var arrayDeUsuarios = [];
var arrayDeAdminis = [];

class Usuario {
    constructor(nombre, apellido, email, contraseña, rol) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.contraseña = contraseña
        this.rol = rol
    }

    inicioSesion(email, contraseña) {

        if (email === this.email && contraseña === this.contraseña) {
            console.log("sesion iniciada");
            return true
        } else {
            console.log("usuario o contraseña erroneos");
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

function verificacion(campoAVerificar) {

    campoAVerificar = prompt("cual es tu " + campoAVerificar + "?").trim().toLowerCase()
    campoAVerificar ? campoAVerificar : campoAVerificar = prompt("ingresa  tu " + campoAVerificar).trim().toLowerCase()
    return campoAVerificar
}

function crearUsuario() {
    let nombre = "nombre"
    nombre = verificacion(nombre)
    let apellido = "apellido"
    apellido = verificacion(apellido)
    let email = "email"
    email = verificacion(email)
    let contraseña = "contraseña"
    contraseña = verificacion(contraseña)
    let rol = email.includes("admin") ? 1 : 2
    console.log(rol);
    let usuarioNuevo = new Usuario(nombre, apellido, email, contraseña, rol)
    console.table(usuarioNuevo);
    usuarioAdminis = new Adminis(nombre, apellido, email, contraseña, rol)
    console.table(usuarioAdminis);
    arrayDeUsuarios.push(usuarioAdminis)

    console.log(arrayDeUsuarios);
    console.log(arrayDeAdminis);
    usuarioNuevo = ""
    console.log("usuario creado");
    return arrayDeUsuarios
}

function iniciarSesion() {
    let email = prompt("ingrese email").trim().toLowerCase()
    let contra = prompt("ingrese contraseña").trim().toLowerCase()
    console.log(arrayDeUsuarios);
    let inicio = ""
    if (arrayDeUsuarios != false) {
        for (let i = 0; i < arrayDeUsuarios.length; i++) {
            inicio = arrayDeUsuarios[i].inicioSesion(email, contra);


            if (inicio === true) {
                if (arrayDeUsuarios[i].rol === 1) {
                    inicio = arrayDeUsuarios[i].esAdmin()
                    return inicio
                } else {
                    return inicio
                }

            }
        }
    } else {
        console.log("no hay usuarios registrados en el sistema");
        return false
    }

}



function opcionesSesion() {
    do {
        valor = Number(prompt("que operacion queres hacer?\n 2. registrarse \n 1.Iniciar Sesion \n  0. Salir"))
        switch (valor) {
            case 2:
                crearUsuario()

                break
            case 1:
                iniciarSesion()


                break
            case 0:
                console.log("gracias por usar nuestros servicios");
                calor = 0
                break
            default:
                console.log("seleccione una opcion");
                break
        }

    } while (valor !== 0 || valor === null)
}
setTimeout(() => opcionesSesion(), 2000)
