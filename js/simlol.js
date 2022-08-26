let ataqueDeLux;
let armaduraDeLux;
let vidaDeLux;

let ataqueDeMorgana;
let armaduraDeMorgana;
let vidaDeMorgana;

let ataqueDeSett;
let armaduraDeSett;
let vidaDeSett;

ataqueDeLux = 200;
armaduraDeLux = 250;
vidaDeLux = 900;

ataqueDeMorgana = 150;
armaduraDeMorgana = 500;
vidaDeMorgana = 700;

ataqueDeSett = 100;
armaduraDeSett = 1500;
vidaDeSett = 1500;


////////////PRIMER ATAQUE DE LUX/////////////////////

let ataqueArmadura = (ataqueDeLux * 0.5)  ////// <= multiplicacion del ataque sobre la absorbsion de la armadura
let ataqueVida = (ataqueDeLux * 0.5)   ////// <= mulplicacion del ataque sobre el golpe a la vida

armaduraDeSett = armaduraDeSett - ataqueArmadura; ///// resultado de la armadura despues del ataque
vidaDeSett = vidaDeSett - ataqueVida; ///// resultado de la vida del ataque


console.log(armaduraDeSett); ///// impresion en consola de la armadura
console.log(vidaDeSett); ///// impresion en consola de la vida

///////////PRIMER ATAQUE DE MORGANA///////////////

ataqueArmadura = (ataqueDeMorgana * 0.5) ////// <= multiplicacion del ataque sobre la absorbsion de la armadura
ataqueVida = (ataqueDeMorgana * 0.5) ////// <= mulplicacion del ataque sobre el golpe a la vida

armaduraDeSett = armaduraDeSett - ataqueArmadura; ///// resultado de la armadura despues del ataque
vidaDeSett = vidaDeSett - ataqueVida; ///// resultado de la vida del ataque

console.log(armaduraDeSett); ///// impresion en consola de la armadura
console.log(vidaDeSett); ///// impresion en consola de la vida

////////////PRIMER ATAQUE DE SETT/////////////////

ataqueArmadura = (ataqueDeSett * 0.5)
ataqueVida = (ataqueDeSett * 0.5)

armaduraDeMorgana = armaduraDeMorgana - ataqueArmadura;
vidaDeMorgana = vidaDeMorgana - ataqueVida;

console.log(armaduraDeMorgana);
console.log(vidaDeMorgana);

armaduraDeLux = armaduraDeLux - ataqueArmadura;
vidaDeLux = vidaDeLux - ataqueVida;

console.log(armaduraDeLux);
console.log(vidaDeLux);






////// FUNCION DE ATAQUE //////////////

function funcionDeAtaque(ataque, armadura, vida) {
    let ataqueArmadura = (ataque * 0.5)
    let ataqueVida = (ataque * 0.5)

    armadura = armadura - ataqueArmadura;
    vida = vida - ataqueVida;

    console.log(armadura);
    console.log(vida);
}

funcionDeAtaque(ataqueDeLux, armaduraDeSett, vidaDeSett)
funcionDeAtaque(ataqueDeMorgana, armaduraDeSett, vidaDeSett)
funcionDeAtaque(ataqueDeSett, armaduraDeMorgana, vidaDeMorgana)
funcionDeAtaque(ataqueDeSett, armaduraDeLux, vidaDeLux)

