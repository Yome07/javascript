// exercice 2 calculatrice
function calcul() {
    let regex = /^([0-9]+(\.[0-9])?[0-9]*)$/;
    let nombre1 = parseFloat(document.querySelector("#nombre1").value);
    let nombre2 = parseFloat(document.querySelector("#nombre2").value);
    let operation = document.querySelector("#operation").value;
    let calcul
    let divisionParZero = "";
    if (regex.test(nombre1) && regex.test(nombre2)) {
        
        switch (operation) {
            case "+": calcul = nombre1+nombre2;
                break;
            case "-": calcul = nombre1-nombre2;
                break;
            case "x": calcul = nombre1*nombre2;
                break;
            default: 
                if (nombre2 == 0) {
                    divisionParZero = "division par 0 impossible";
                } else {
                    calcul = nombre1/nombre2;
                }
                break;
        }
        if (divisionParZero != "") {
            document.querySelector("#resultat").innerHTML = divisionParZero;
        } else {
            document.querySelector("#resultat").innerHTML = nombre1 + " " + operation + " " + nombre2 + " = " + calcul;
        }
        return false;
    } else {
        if (!regex.test(nombre1)|| !regex.test(nombre2)) {
            document.querySelector("#resultat").innerHTML = "Entrer un nombre";
        }
        return false;
    }
}

// Exercice 3

function toggleCalc() {
    document.querySelector("#afficher").classList.toggle("masquer");
    document.querySelector("#masquer").classList.toggle("masquer");
    document.querySelector("form").classList.toggle("masquer");
    document.querySelector("#resultat").classList.toggle("masquer");
}

// Exercice 4
function afficheInfoNombre() {
    document.querySelector("#afficheInfo").innerHTML = "Saisir un nombre";
    document.querySelector("#afficheInfo").classList.toggle("decoInfo");
}

function afficheInfoOperation() {
    document.querySelector("#afficheInfo").innerHTML = "Sélectionner un opérateur : +,-,x,/";
    document.querySelector("#afficheInfo").classList.toggle("decoInfo");
}

function efface() {
    document.querySelector("#afficheInfo").innerHTML = "";
    document.querySelector("#afficheInfo").classList.toggle("decoInfo");

}

function effaceResultat() {
    document.querySelector("#resultat").innerHTML = "";
}

//document.querySelctor("input[reset]").onmouseout = function() {
//    document.querySelector("#resultat").innerHTML = "";
//}