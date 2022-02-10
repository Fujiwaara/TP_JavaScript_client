// let aff1perso = localStorage.getItem('affPerso');
// aff1perso = JSON.parse(aff1perso, 'UTF-8');

// createCard(aff1perso);

// Récupération de l'url de la page active
let str = window.location.href;

let url = new URL(str);

let indice = url.searchParams.get("perso");

let personnages = recupListePersos();

let personnage = personnages[indice];

if (personnage.nom[1]) {
    document.getElementById("nom").value = personnage.nom[0]+ " " +personnage.nom[1];
} else {
    document.getElementById("nom").value = personnage.nom[0]
}
document.getElementById("classe").value = personnage.classe;
document.getElementById("arme").value = personnage.arme;
document.getElementById("endurance").value = personnage.endurance;
document.getElementById("force").value = personnage.force;
document.getElementById("agilite").value = personnage.agilite;
document.getElementById("intelligence").value = personnage.intelligence;


/**
 * Modification de l'objet personnage par les entrées utilisateurs
 */
 function modifPerso() {
    // Déclaration de l'objet personnage vide
    let personnage = {};

    // Récupération du contenu de chaque champs du formulaire de création de personnage
    // puis attribution des valeurs récupéré à l'objet personnage
    personnage.nom = document.getElementById("nom").value.split(' ');
    personnage.classe = document.getElementById("classe").value;
    personnage.arme = document.getElementById("arme").value;
    personnage.endurance = document.getElementById("endurance").value;
    personnage.force = document.getElementById("force").value;
    personnage.agilite = document.getElementById("agilite").value;
    personnage.intelligence = document.getElementById("intelligence").value;

    // Condition de vérification des champs du formulaire
    if (personnage.nom == "sansChoix") {
        document.querySelector(".errorVideNom").style.display = "block";
        return false;
    } else {
        document.querySelector(".errorVideNom").style.display = "none";
    }

    if (personnage.classe == "sansChoix") {
        document.getElementById("errorVideClasse").style.display = "block";
        return false;
    } else {
        document.getElementById("errorVideClasse").style.display = "none";
    }

    if (personnage.arme == "sansChoix") {
        document.getElementById("errorVideArme").style.display = "block";
        return false;
    } else {
        document.getElementById("errorVideArme").style.display = "none";
    }

    if (!personnage.endurance) {
        document.getElementById("errorVideEndu").style.display = "block";
        return false;
    } else {
        document.getElementById("errorVideEndu").style.display = "none";
    }

    if (personnage.endurance < 1 || personnage.endurance > 150) {
        document.getElementById("errorValueEndu").style.display = "block";
        return false;
    } else {
        document.getElementById("errorValueEndu").style.display = "none";
    }

    if (!personnage.force) {
        document.getElementById("errorVideForce").style.display = "block";
        return false;
    } else {
        document.getElementById("errorVideForce").style.display = "none";
    }

    if (personnage.force < 1 || personnage.force > 150) {
        document.getElementById("errorValueForce").style.display = "block";
        return false;
    } else {
        document.getElementById("errorValueForce").style.display = "none";
    }

    if (!personnage.agilite) {
        document.getElementById("errorVideAgil").style.display = "block";
        return false;
    } else {
        document.getElementById("errorVideAgil").style.display = "none";
    }

    if (personnage.agilite < 1 || personnage.agilite > 150) {
        document.getElementById("errorValueAgil").style.display = "block";
        return false;
    } else {
        document.getElementById("errorValueAgil").style.display = "none";
    }agilite

    if (!personnage.intelligence) {
        document.getElementById("errorVideIntel").style.display = "block";
        return false;
    } else {
        document.getElementById("errorVideIntel").style.display = "none";
    }

    if (personnage.intelligence < 1 || personnage.intelligence > 150) {
        document.getElementById("errorValueIntel").style.display = "block";
        return false;
    } else {
        document.getElementById("errorValueIntel").style.display = "none";
    }

    personnages[indice] = personnage
    savePersos(personnages);
}