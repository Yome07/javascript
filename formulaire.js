function verif() {
   if (document.getElementById("telephone").value == "") {
        var p = document.createElement("p");
        p.setAttribute("id", "telephoneObligatoire");
        p.innerHTML = "champ obligatoire";
        var inputPhone = document.getElementById("telephone");
        var parentDiv = inputPhone.parentNode;
        parentDiv.insertBefore(p, inputPhone);
    
        document.getElementById("telephone").focus();
       // document.getElementById("telephone").style.backgroundColor= "red";
        return false;
    }

    const regexTelephone = /^([0-9]{10})|(\+33([0-9]{9,10}))$/;
    console.log(regexTelephone.test(document.getElementById("telephone").value));
    let numTelephone = document.getElementById("telephone").value;
    let numSansEspace = numTelephone.replace(/ /g, ""); 
    if (!regexTelephone.test(numSansEspace)) {
        var p = document.createElement("p");
        p.innerHTML = "le téléphone doit contenir 10 chiffres";
        var inputPhone = document.getElementById("telephone");
        var parentDiv = inputPhone.parentNode;
        parentDiv.insertBefore(p, inputPhone);
        document.getElementById("telephone").value ="";
        document.getElementById("telephone").focus();
       // document.getElementById("telephone").style.backgroundColor= "red";
        return false;
    } else {
        return true;
        document.getElementsByTagName("div").removeChild("p");

    }
}


function testRegex(id, regex) {
    document.querySelector(id).addEventListener("keyup", function () {
        if (!regex.test(document.querySelector(id).value)) {
            console.log("format non valide");
        } else {
            console.log("format ok");
        }
    });
}

testRegex("#nom", /^[A-Z]+$/);
testRegex("#prenom", /^[A-Z][a-z]*$/);
testRegex("#telephone", /^([0-9]{10})|(\+33([0-9]{9,10}))$/);
testRegex("#email", /^([a-z][A-Z]\.)+@([a-z][A-Z])+\.{1}([a-z][A-Z])+$/);

/*document.querySelector("#telephone").addEventListener("keyup", function () {
    const regexTelephone = /^([0-9]{10})|(\+33([0-9]{9,10}))$/;
    if (!regexTelephone.test(document.querySelector("#telephone").value)) {
        console.log("format non valide");
    } else {
        console.log("format ok");
    }
});*/


function change() {
    this.style.backgroundColor="blue";
    this.focus();
}

document.querySelectorAll('input').forEach(element => {
    element.addEventListener('mouseover', change)
}); 