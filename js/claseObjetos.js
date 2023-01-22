var arrayDeUsuarios = [];
var arrayDeAdminis = [];
var preStorage = []

class Usuario {
    constructor(id, nombre, apellido, email, contraseña, rol) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.contraseña = contraseña
        this.rol = rol
    }
    calcularIdUsuarios() {

    }
    inicioSesion(mail, contraseña) {

        if (mail !== this.email || contraseña !== this.contraseña) {
            console.log("usuario o contraseña erroneos");
            return false
        }
        console.log(`bienvenido otra vez ${this.nombre}`);
        return true

    }
}


class Adminis extends Usuario {
    constructor(id, nombre, apellido, email, password, rol) {
        super(id, nombre, apellido, email, password, rol)
        this.admin = rol == 1 ? true : false
    }
    esAdmin() {
        this.admin === true ? console.log("Sesion iniciada como Administrador") : this.admin = false;
    }
}

function verificacion(campoAVerificar, nombreCampoForm) {


    campoAVerificar = prompt("cual es tu " + nombreCampoForm + "?")
    campoAVerificar !== null ? campoAVerificar.trim().toLowerCase() : campoAVerificar = false

    while (campoAVerificar == false || campoAVerificar === " ") {
        alert("no podes dejar campos en blanco");
        campoAVerificar = prompt("cual es tu " + nombreCampoForm + "?")
        campoAVerificar ? campoAVerificar.trim().toLowerCase() : campoAVerificar = false

    }
    return campoAVerificar
}

function crearUsuario() {
    let campo1 = "nombre"
    nombre = verificacion(nombre, campo1)

    let campo2 = "apellido"
    apellido = verificacion(apellido, campo2)

    let campo3 = "email";
    let email;
    email = verificacion(email, campo3)

    let campo4 = "contraseña"
    let contraseña;
    contraseña = verificacion(contraseña, campo4)

    let rol = email.includes("admin") ? 1 : 2
    console.log(rol);

    let id = arrayDeUsuarios.length + 1

    let usuarioNuevo = new Usuario(id, nombre, apellido, email, contraseña, rol)

    console.log(usuarioNuevo.nombre);

    usuarioAdminis = new Adminis(id, nombre, apellido, email, contraseña, rol)

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
            inicio ? preStorage.push(arrayDeUsuarios[i].id) : null
            console.log(preStorage);

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

function cambiarContraseña() {
    let email = prompt("ingrese email").trim().toLowerCase()
    let contra = prompt("ingrese contraseña").trim().toLowerCase()
    console.log(arrayDeUsuarios[0].id);
    console.log(preStorage[0]);
    let arrayNuevo = arrayDeUsuarios.find(x => x.id === preStorage[0])
    console.log(arrayNuevo);
    if (arrayNuevo === undefined) {
        console.log("inicie sesion para cambiar la contraseña");
    } else {


        if (arrayNuevo.contraseña === contra) {
            let nuevaContra = prompt("ingrese su NUEVA contraseña").trim().toLowerCase()
            arrayNuevo.contraseña = nuevaContra
            console.log("contraseña cambiada");
            console.log(arrayNuevo);
        } else {
            console.log("su contraseña no coincide");
        }

    }
}



function opcionesSesion() {
    do {
        valor = Number(prompt("que operacion queres hacer?\n 3. registrarse \n 2.Iniciar Sesion \n 1.Cambiar contraseña \n  0. Salir"))
        switch (valor) {
            case 3:
                crearUsuario()

                break
            case 2:
                iniciarSesion()


                break
            case 1:
                cambiarContraseña()

                break
            case 0:
                console.log("gracias por usar nuestros servicios");

                break
            default:
                console.log("seleccione una opcion");
                break
        }

    } while (valor !== 0 || valor === null)
}
setTimeout(() => opcionesSesion(), 2000)
