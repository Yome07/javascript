/* Script permettant de savoir si une année est bissextile*/
var annee=prompt("année?");

if ( ((annee%4==0) && (annee%100!=0)) || (annee%400==0)) {
    console.log("l'année "+ annee + " est bissextile");
}
else{
    console.log("l'année "+ annee + " n'est pas bissextile");
}

    /* option en TERNAIRE
        ( (annee=prompt("année?")) %4==0&&annee%100!=0) || annee%400==0? console.log("Bis") : console.log("pas bis");*/

/*----------------------------------------------------------------------------------------------------------------*/


