
/*
//LES COMMANDES
    // console.log() : Créer un message dans la console
    console.log("hello");

    // alert() : Ouvre une fenetre pop-up d'alerte, ok pour la fermer
    alert("je suis alert");

    // confirm() : ouvre une fenetre pop-up de confirmation (ok / annuler) -> renvoie un booléen (true/false)
    confirm("ça va bien?");

    // prompt : demande à l'utilisateur d'entrer une donnée
    prompt("saisir prénom");

    // pour garder les données saisies dans prompt, définir une variable = prompt
    age=prompt("saisir âge");
    console.log(age); //ici va apparaître dans la console

    //les calculs peuvent se faire n'importe où
    console.log(5*3); //ici va apparaître dans la console
*/
//-------------------------------------------------------------------------------------------------------------

/*
//LES VARIABLES 
    //le type de valeur n'a pas à être spécifié.
    //indiquer var devant la variable (best practice)
    var chiffre;
    console.log(chiffre);
    chiffre =10;
    console.log(chiffre);

    //La portée des variables
        var x = 4; // la variable est globale
        
        function locale(){
            var x=7;    //la variable est locale dans la fonction locale
            return x;
        }

        console.log("x locale : " + locale() + ", x globale : " + x );

    //Les constantes -> mot clef const
        const Y=12;
        console.log(Y);
        Y=21;
        console.log(Y); // console renvoie une erreur car Y est une constante

    //Concatener
        chaineA = "Bonjour";
        chaineB = " tout le monde";
        chaine1 = chaineA+chaineB;
        console.log(chaine1);

        chaine2 = chaineA.concat(chaineB);
        console.log(chaine2);
*/
//------------------------------------------------------------------------------------------------------------

/*
// IF
    var nombre = prompt("quel age?");
    if (nombre>=18){
        console.log("Vous etes majeur");
    }
    else{
        console.log("Vous etes mineur");
    }

//SWITCH ---- /!\ chaque case ne peut prendre qu'une valeur
    (variable) {
        case valeur 1:
            intructions;
            break;
        case valeur n:
            intructions;
            break;
        default:
            instructions;
    }
    var couleur = prompt("couleur?")
    switch (couleur){
        case "jaune":
            alert("jaune");
            break;
        case "rouge":
            alert("rouge");
            break;
        default:
            alert("n'est pas dans la liste");
    }

//TERNAIRE
    process = condition? "OK" : "FAILED";
    équivaut au if
    if (condition=true){
        "ok";
    }
    else{
        "failed";
    }
*/
//------------------------------------------------------------------------------------------------------------

/*
//LES BOUCLES

    // Boucle while
        var index=0;
        while (index<3) {
            index++; //incrémentation
            console.log("j'aime le JS");
        }
    
    //Boucle for

    // Boucle do while
        var index=5;
        do {
            index--; // décrémentation
            console.log("j'aime toujours le JS");
        } while (index>0);
*/
//-------------------------------------------------------------------------------------------------------------

/*
//Document.write permet d'écrire directement dans la page
    document.write("document.write : salut");
*/
//-------------------------------------------------------------------------------------------------------------

/*
//LES TABLEAUX  /!\ commence toujours par indice 0
    var fruits= ["bananes", "oranges", "pommes","poires"];
    console.log(fruits[2]);
    console.log(fruits.length); //uiliser .LENGTH pour prendre tout le tableaux (dans une boucle par exemple)

    //tableaux multi dimensionnel
        var etudiant=[
            ["moussa", 9],
            ["homer", 11],
            ["jean", 17],
            ["robert", 14],
        ]
        console.log(etudiant [1][0]); // premier [] pour la colonne, deuxieme [] pour la ligne

        //prendre toutes les données du tzbleau multidim
            for (let index = 0; index < etudiant.length; index++) {
                console.log (etudiant[index]);
                for (let j = 0; j < etudiant[index].length; j++) {
                    console.log (etudiant[index][j]);       
                }    
            }
        //idem mais en forEach => plus pratique que for pour les tableaux
            etudiant.forEach(element => {  //element est un nom générique, pon peut lui donner le nom qu'on veut, idem pour el
                console.log(element);
                element.forEach(el => {
                    console.log(el);
                });
            });
    
    // FOR IN => pour parcourir un tableau sans passer par length
        var tab=[5,8,10,15,19];
        for (indice in tab) {
            console.log(indice);
            console.log(tab [indice]);
        }
*/
//-------------------------------------------------------------------------------------------------------------


//LES OBJETS PREDEFINIS
        var txt="hello World";
        console.log(txt.length+"\n");
        console.log(txt.toUpperCase());
        console.log(Math.PI);
        console.log(Math.round(Math.PI));



