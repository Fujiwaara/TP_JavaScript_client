// let aff1perso = localStorage.getItem('affPerso');
// aff1perso = JSON.parse(aff1perso, 'UTF-8');

let str = window.location.href;

let url = new URL(str);

let indice = url.searchParams.get("perso");

let personnages = recupListePersos();

let aff1perso = personnages[indice];

createCardAffichePerso(aff1perso, indice);

// Condition d'affichage du background de body et de la couleur du l'élément avec pour classe "btn1"
// selon le classe du personnage
if (aff1perso.classe == "Pyro") {
    document.getElementById("body").style.backgroundColor = "#B33030";
    document.querySelector(".btn1").style.color = "#DA7234";
}
if (aff1perso.classe == "Électro") {
    document.getElementById("body").style.backgroundColor = "#9b59b6";
    document.querySelector(".btn1").style.color = "#9b59b6";
}
if (aff1perso.classe == "Géo") {
    document.getElementById("body").style.backgroundColor = "#FFBD35";
    document.querySelector(".btn1").style.color = "#FFBD35";
}
if (aff1perso.classe == "Hydro") {
    document.getElementById("body").style.backgroundColor = "#009DAE"
    document.querySelector(".btn1").style.color = "#079ED4";
}
if (aff1perso.classe == "Anémo") {
    document.getElementById("body").style.backgroundColor = "#A3DA8D"
    document.querySelector(".btn1").style.color = "#30B28A";
}
if (aff1perso.classe == "Cryo") {
    document.getElementById("body").style.backgroundColor = "#C8F2EF"
    document.querySelector(".btn1").style.color = "#92E1E5";
}