/**
 * Fonction permettant de générer une carte pour la page index.html
 * @param {object} item objet contenant les informations à afficher
 * @param {index} i Création d'un index pour permettre de retrouver un personnage en particulier si besoin
 */
function createCard(item, i) {
    // Récupération de la div principal qui contiendra les cartes
    const cardContainer = document.querySelector('#container_card');

    // Création de la div avec pour classe "card"
    let divCard = document.createElement('div');
    divCard.classList.add("card");

    // Création de la div avec pour classe "topCard"
    let divTopCard = document.createElement('div');
    divTopCard.classList.add("topCard");

    // Création de l'image avec pour classe "card_img-top"
    let imgPerso = document.createElement('img');
    imgPerso.classList.add("card_img-top");
    // Condition pour utiliser une image selon le nom du personnage
    if (item.nom[0]+item.nom[1] == "HuTao") {
        imgPerso.src = "./Images/Personnages/huTao1.jpg";
    }
    if (item.nom == "Ningguang") {
        imgPerso.src = "./Images/Personnages/ningguang1.jpg";
    }
    if (item.nom == "Diluc") {
        imgPerso.src = "./Images/Personnages/diluc1.jpg";
    }
    if (item.nom[0]+item.nom[1] == "ShogunRaiden") {
        imgPerso.src = "./Images/Personnages/shogun-raiden1.jpg";
    }
    if (item.nom == "Barbara") {
        imgPerso.src = "./Images/Personnages/barbara1.jpg";
    }
    if (item.nom == "Xiao") {
        imgPerso.src = "./Images/Personnages/xiao1.jpg";
    }
    if (item.nom[0]+item.nom[1] == "KamisatoAyaka") {
        imgPerso.src = "./Images/Personnages/kamisato-ayaka1.jpg";
    }
    if (item.nom[0]+item.nom[1] == "KaedeharaKazuha") {
        imgPerso.src = "./Images/Personnages/kazuha-kaedehara1.jpg";
    }
    if (item.nom == "Zhongli") {
        imgPerso.src = "./Images/Personnages/zhongli1.jpg";
    }
    if (item.nom == "Yoimiya") {
        imgPerso.src = "./Images/Personnages/yoimiya1.png";
    }
    if (item.nom == "Razor") {
        imgPerso.src = "./Images/Personnages/razor1.jpg";
    }

    // Création de la div avec pour classe "cover"
    let divCover = document.createElement('div');
    divCover.classList.add("cover");

    // Création de la div avec pour classe "element"
    let divElement = document.createElement('div');
    divElement.classList.add("element");

    // Création de l'image dans la div de classe "element"
    let imgElement = document.createElement('img');
    // Condition pour utiliser une image selon la classe du personnage
    if (item.classe == "Pyro") {
        imgElement.src = "./Images/Elements/pyro-element.png";
        divCover.style.backgroundColor = "#FC4F4Fb3";
    }
    if (item.classe == "Hydro") {
        imgElement.src = "./Images/Elements/hydro-element.png";
        divCover.style.backgroundColor = "#009DAEb3";
    }
    if (item.classe == "Électro") {
        imgElement.src = "./Images/Elements/electro-element.png";
        divCover.style.backgroundColor = "#9b59b6b3";
    }
    if (item.classe == "Géo") {
        imgElement.src = "./Images/Elements/geo-element.png";
        divCover.style.backgroundColor = "#FFBD35b3"
    }
    if (item.classe == "Anémo") {
        imgElement.src = "./Images/Elements/anemo-element.png";
        divCover.style.backgroundColor = "#A3DA8Db3"
    }
    if (item.classe == "Cryo") {
        imgElement.src = "./Images/Elements/cryo-element.png";
        divCover.style.backgroundColor = "#C8F2EFb3"
    }

    // Création de la div avec pour classe "card-body"
    let divCardBody = document.createElement('div');
    divCardBody.classList.add("card-body");

    // Création du h5 avec pour classe "card-title" et ajout de la valeur de la propriété nom
    let h5cardTitle = document.createElement('h5');
    h5cardTitle.classList.add("card-title");
    if (item.nom[1]) {
        h5cardTitle.innerHTML = item.nom[0] + " " + item.nom[1];
    } else {
        h5cardTitle.innerHTML = item.nom[0];
    }
    

    /* Alternative pour créer les p avec une boucle qui parcours l'objet personnage et affiche les key puis les valeurs */
    // let fichePerso = document.createElement('p');
    // fichePerso.classList.add("card-text");

    // let attributsPerso = "";
    // for (const key in item) {
    //     const element = item[key];
    //     attributsPerso = attributsPerso + key + " : " + element + "\n"
    // }
    // fichePerso.innerText = attributsPerso

    // Création des p et ajout des valeurs pour chaques propriétés de l'objet
    let p1 = document.createElement('p');
    p1.innerHTML = "Classe: " + item.classe;

    let p2 = document.createElement('p');
    p2.innerHTML = "Arme: " + item.arme;

    let p3 = document.createElement('p');
    p3.innerHTML = "Endurance: " + item.endurance;

    let p4 = document.createElement('p');
    p4.innerHTML = "Force: " + item.force;

    let p5 = document.createElement('p');
    p5.innerHTML = "Agilité: " + item.agilite;

    let p6 = document.createElement('p');
    p6.innerHTML = "Intelligence: " + item.intelligence;

    // Création de la div avec pour classe "card-footer"
    let divCardFooter = document.createElement('div');
    divCardFooter.classList.add("card-footer");

    // Création du a avec pour classe "btn btn-primary" puis ajout de l'attribut href avec pour valeur le chemin vers la page affichePerso.html
    // et ajout dans l'url d'un paramètre perso=i pour définir un index que l'on utilisera si on veut afficher le personnage et ajout du texte pour le bouton
    let a1 = document.createElement('a');
    a1.classList.add("btn-a", "btn1");
    a1.setAttribute("href", "./html/affichePerso.html?perso="+i);
    a1.innerHTML = "Sélectionner";

    // Condition pour la couleur du bouton Sélectionner
    if (item.classe == "Pyro") {    
        a1.style.color = "#DA7234";
    }
    if (item.classe == "Électro") {
        a1.style.color = "#9b59b6";
    }
    if (item.classe == "Géo") {
        a1.style.color = "#FFBD35";
    }
    if (item.classe == "Hydro") {
        a1.style.color = "#079ED4";
    }
    if (item.classe == "Anémo") {
        a1.style.color = "#30B28A";
    }
    if (item.classe == "Cryo") {
        a1.style.color = "#92E1E5";
    }

    // Création du a avec pour classe "btn btn-danger" puis ajout de l'attribut onclick avec pour valeur la fonction supPerso(i) 
    // pour appeler la fonction supPerso() et i en paramètre pour définir un index que l'on utilisera si on veut supprimer le personnage et ajout du texte pour le bouton
    let a2 = document.createElement('a');
    a2.classList.add("btn-a", "btn2");
    a2.setAttribute("onclick", "supPerso("+i+")");
    a2.innerHTML = "Supprimer";
    

    // ajouts des éléments dans l'html
    cardContainer.appendChild(divCard);
    divCard.appendChild(divTopCard);
    divTopCard.appendChild(imgPerso);
    divTopCard.appendChild(divCover);
    divTopCard.appendChild(divElement);
    divElement.appendChild(imgElement);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5cardTitle);
    // divCardBody.appendChild(fichePerso); // appendChild de l'alternative pour créer les p
    divCardBody.appendChild(p1);
    divCardBody.appendChild(p2);
    divCardBody.appendChild(p3);
    divCardBody.appendChild(p4);
    divCardBody.appendChild(p5);
    divCardBody.appendChild(p6);
    divCard.appendChild(divCardFooter);
    divCardFooter.appendChild(a1);
    divCardFooter.appendChild(a2);
}


/**
 * Fonction de sauvegarde du tableau personnages en stockage local dans le navigateur
 * @param {Tableau} personnages Tableau à sauvegarder
 */
 function savePersos(personnages) {
    //JSON.stringify(personnages) = transforme le tableau personnages en chaine de caractère
    let tabPersos = JSON.stringify(personnages);
    // Stockage du tableau converti en chaine de caractère dans le navigateur
    localStorage.setItem('tabPerso', tabPersos);
}

/**
 * Remplissage de l'objet personnage par les entrées utilisateurs
 */
function createPerso() {
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

    // Récupération du tableau personnages contenu dans la fonction recupListePersos, dans la variable personnages
    let personnages = recupListePersos();

    // Envoi de l'objet personnage crée, dans le tableau personnages
    personnages.push(personnage);
    savePersos(personnages);
}

/**
 * Permet de supprimer un objet personnage dans le tableau personnages selon son index 
 * @param {index} i Index pour permettre de supprimer un personnage en particulier 
 */
function supPerso(i) {
    // Récupération du tableau personnages contenu dans la fonction recupListePersos, dans la variable personnages
    let personnages = recupListePersos();

    // Suppression d'un élément selon son index
    personnages.splice(i, 1);
    // Sauvegarde du tableau après suppression d'un élément pour que la suppression soit bien prise en compte et sauvegardé
    savePersos(personnages);
    // Recharge la page et prend en compte les changements
    document.location.reload();
}

/**
 * Récupère en stockage local dans le navigateur le tableau personnages si il existe sinon crée un tableau personnages vide
 * @returns Retourne le tableau personnages
 */
function recupListePersos() {
    let personnages = localStorage.getItem('tabPerso');

    if (personnages) {
        personnages = JSON.parse(personnages, 'UTF-8');
    } else {
        personnages = [];
    }

    return personnages
}

// function affichePerso(i) {
//     let personnages = recupListePersos();
//     let tabAffichePerso = personnages[i];

//     let affichePerso = JSON.stringify(tabAffichePerso);
//     localStorage.setItem('affPerso', affichePerso);
// }