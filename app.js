//nombre = prompt("entrer un nombre en 1 et 100");

/*function controle(form) {
    nombre = document.form.input.value;

    if (nombre > 100) {
        document.getElementById("resultat").append("Entrer un nombre premier !");
        document.getElementById("text").value = "";
    } else {
        document.getElementById("resultat").innerHTML = "";
        var nombresPremiers = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

        var resultat = nombresPremiers.indexOf(parseInt(nombre));
        console.log(resultat);

        if (resultat != -1) {
            document.getElementById("resultat").append(nombre + " est un nombre premier");
        } else {
            document.getElementById("resultat").append(nombre + " n'est pas un nombre premier");
        }
    }
}

function vide() {
    document.getElementById("resultat").innerHTML = "";
}


//exercice 2


var premier = prompt("entrer un nombre entre 1 et 100");
var resultat = true;
if (premier <= 1) {
    resultat = false;
} else if (premier <= 3) {
    resultat = true;
} else if (premier % 2 == 0 || premier % 3 == 0) {
    resultat = false;
} else {
    var i = 5;
    while (i*i <= premier) {
        if (premier % i == 0 || premier % (i+2) == 0) {
            resultat = false;
        }
        i = i + 6;  
    }
    resultat = true;
}

if (resultat) {
    document.write("<p>" + premier + " est un nombre premier");
} else {
    document.write("<p>" + premier + " n'est pas un nombre premier");
    
}
*/
/*var nbre = prompt("Saisir nombre");
var estPremier = true;
if (nbre == 0 || nbre == 1) {
    alert("pas premier");
}
for (let index = 2; index < nbre; index++) {

    if (nbre % index == 0) {
        alert("Pas premier");
        estPremier = false;
    }
}

if (estPremier) {
    alert("est premier");
}


//exercice 3
var semaine = ["lundi", "mar", "mercredi", "jeudi", "vendredi", "samedi", "dimanc"] ;
console.log(semaine);
semaine.pop();
console.log(semaine);
semaine.forEach(element => {
    document.write(element + " ");
});
semaine.push("dimanche");
console.log(semaine);
semaine[semaine.indexOf("mar")] = "mardi";
console.log(semaine);
console.log(semaine.length);
console.log(semaine[4]);*/
/*
//exercice 4
var fruits = ["banane", "raisin", "pomme"];
document.write("<p>" + fruits + "</p>");
fruit = prompt("entrer un fruit");
var dansTableau = false;

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    if (fruit == element) {
        dansTableau = true;
    }
}

if (dansTableau) {
    document.write("<p>" + fruit + "</p>");
    var myIndex = fruits.indexOf(fruit);
if (myIndex !== -1) {
    fruits.splice(myIndex, 1);
    document.write("<p>" + fruits + "</p>");
}

} else {
    document.write("<p>indisponible</p>");
}

*/

var questions = [
    {
    question: 'Est-ce que tu aimes le JavaScript ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est une évolution du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est proche du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est un langage d\'objet par prototypage ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est souvent utilisé coté client ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript peut être utilisé coté client et serveur ?',
    reponse : 'Oui'
    }
    ];


var bonnesReponses = 0;

for (let index = 0; index < questions.length; index++) {
    document.querySelector("#q" + index + " p").append(questions[index].question);
    
}

//questions.forEach(element => {
//    mesReponses[element] = prompt(element.question.toLowerCase());   
//});

//for (let index = 0; index < questions.length; index++) {
 //   mesReponses[index].toLowerCase() = prompt(questions[index].question.toLowerCase());    
//}

/*for (let index = 0; index < questions.length; index++) {
    if (prompt(questions[index].question.toLowerCase()) == questions[index].reponse.toLowerCase()) {
        document.write("Bonne réponse pour la question : " + questions[index].question +"<br>");
        bonnesReponses ++;
    } else {
        document.write("Faux ! La bonne réponse à la question " + questions[index].question + " était " + questions[index].reponse + "<br>");
    }
}*/
//document.write("Vous avez " + bonnesReponses + " bonnes réponses <br>");

document.write("<hr>")
var etudiant=[["Moussa",14], ["Vanessa",17], ["Jean",8], ["Afpa",5]];

etudiant.forEach(element => {
        if (element[1] > 9) {
            document.write(element[0] + " est admis·e avec une moyenne de " + element[1] +"<br>");
        } else {
            document.write(element[0] + " n'est pas admis·e" +"<br>");
        } 
});

