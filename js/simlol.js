
let ataqueDeLux = 200;
let armaduraDeLux = 250;
let vidaDeLux = 900;

let ataqueDeMorgana = 150;
let armaduraDeMorgana = 500;
let vidaDeMorgana = 700;

let ataqueDeSett = 100;
let armaduraDeSett = 1500;
let vidaDeSett = 1500;

let ataqueArmadura;
let ataqueVida;

////////////PRIMER ATAQUE DE LUX/////////////////////

ataqueArmadura = (ataqueDeLux * 0.5);  ////// <= multiplicacion del ataque sobre la absorbsion de la armadura
ataqueVida = (ataqueDeLux * 0.5);   ////// <= mulplicacion del ataque sobre el golpe a la vida

armaduraDeSett = armaduraDeSett - ataqueArmadura; ///// resultado de la armadura despues del ataque
vidaDeSett = vidaDeSett - ataqueVida; ///// resultado de la vida del ataque


console.log(armaduraDeSett); ///// impresion en consola de la armadura
console.log(vidaDeSett); ///// impresion en consola de la vida

///////////PRIMER ATAQUE DE MORGANA///////////////

ataqueArmadura = (ataqueDeMorgana * 0.5); ////// <= multiplicacion del ataque sobre la absorbsion de la armadura
ataqueVida = (ataqueDeMorgana * 0.5); ////// <= mulplicacion del ataque sobre el golpe a la vida

armaduraDeSett = armaduraDeSett - ataqueArmadura; ///// resultado de la armadura despues del ataque
vidaDeSett = vidaDeSett - ataqueVida; ///// resultado de la vida del ataque

console.log(armaduraDeSett); ///// impresion en consola de la armadura
console.log(vidaDeSett); ///// impresion en consola de la vida

////////////PRIMER ATAQUE DE SETT/////////////////

ataqueArmadura = (ataqueDeSett * 0.5);
ataqueVida = (ataqueDeSett * 0.5);

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
    let ataqueArmadura = (ataque * 0.5);
    let ataqueVida = (ataque * 0.5);

    armadura = armadura - ataqueArmadura;
    vida = vida - ataqueVida;

    console.log(armadura);
    console.log(vida);
}

funcionDeAtaque(ataqueDeLux, armaduraDeSett, vidaDeSett)
funcionDeAtaque(ataqueDeMorgana, armaduraDeSett, vidaDeSett)
funcionDeAtaque(ataqueDeSett, armaduraDeMorgana, vidaDeMorgana)
funcionDeAtaque(ataqueDeSett, armaduraDeLux, vidaDeLux)

