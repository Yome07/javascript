function insertHtml() {
    document.querySelector("#HT").value = HT + " €";
    document.querySelector("#TVA").value = TVA + " €";
    document.querySelector("#TauxTVA").value = txTVA + " %";
    document.querySelector("#TTC").value = TTC + " €" ;
    document.querySelector("#resumeHT span").innerHTML = HT + " €";
    document.querySelector("#resumeTVA .montantTVA").innerHTML = TVA + " €";
    document.querySelector("#resumeTVA .tauxTVA").innerHTML = txTVA + " %";
    document.querySelector("#resumeTTC span").innerHTML = TTC + " €";
}

/* valeur par défaut */
let HT = 0;
let TVA = 0;
let TTC = 0;
let txTVA = 20
insertHtml();

/* affichage taux TVA */

taux = document.querySelectorAll(".taux");
taux.forEach(element => {
    element.addEventListener("click", function(){
        HT = parseFloat(document.querySelector("#HT").value);
        TVA = (HT * (parseFloat(this.innerHTML)) / 100).toFixed(2);
        TTC = parseFloat(HT) + parseFloat(TVA);
        insertHtml();
        document.querySelector("#TauxTVA").value = this.innerHTML;
        document.querySelector("#resumeTVA .tauxTVA").innerHTML = this.innerHTML + " %";
    });
});

/* affichage montants TVA et TTC à partir de HT */
document.querySelector("#HT").addEventListener("keyup", function(){
    HT = parseFloat(document.querySelector("#HT").value);
    txTVA = parseFloat(document.querySelector("#TauxTVA").value);
    TVA = (HT * txTVA / 100).toFixed(2);
    TTC = parseFloat(HT) + parseFloat(TVA);
    insertHtml();
});

/* affichage HT et TVA à partir de TTC */
document.querySelector("#TTC").addEventListener("keyup", function(){
    TTC = parseFloat(document.querySelector("#TTC").value);
    txTVA = parseFloat(document.querySelector("#TauxTVA").value);
    HT = (TTC / (1 + txTVA / 100)).toFixed(2);
    TVA = TTC - HT;
    insertHtml();
});

/* affichage TTC et HT à partir de TVA */
document.querySelector("#TVA").addEventListener("keyup", function(){
    TVA = parseFloat(document.querySelector("#TVA").value);
    txTVA = parseFloat(document.querySelector("#TauxTVA").value);
    HT = (TVA * 100 / txTVA).toFixed(2);
    TTC = parseFloat(HT) + parseFloat(TVA);
    insertHtml();
});

/* affichage TTC, TVA et HT à partir du taux de TVA */
document.querySelector("#TauxTVA").addEventListener("keyup", function(){
    txTVA = parseFloat(document.querySelector("#TauxTVA").value);
    HT = parseFloat(document.querySelector("#HT").value);
    TVA = (HT * txTVA / 100).toFixed(2);
    TTC = parseFloat(HT) + parseFloat(TVA);
    insertHtml();
});