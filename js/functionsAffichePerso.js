/**
 * Fonction permettant de générer une carte pour la page affichePerso.html
 * @param {object} item objet contenant les informations à afficher
 * @param {index} i Création d'un index pour permettre de retrouver un personnage en particulier si besoin
 */
function createCardAffichePerso(item, i) {
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
        imgPerso.src = "../Images/Personnages/huTao2.webp";
    }
    if (item.nom == "Ningguang") {
        imgPerso.src = "../Images/Personnages/ningguang2.png";
    }
    if (item.nom == "Diluc") {
        imgPerso.src = "../Images/Personnages/diluc2.jpg";
    }
    if (item.nom[0]+item.nom[1] == "ShogunRaiden") {
        imgPerso.src = "../Images/Personnages/shogun-raiden2.jpg";
    }
    if (item.nom == "Barbara") {
        imgPerso.src = "../Images/Personnages/barbara2.jpg";
    }
    if (item.nom == "Xiao") {
        imgPerso.src = "../Images/Personnages/xiao2.jpg";
    }
    if (item.nom[0]+item.nom[1] == "KamisatoAyaka") {
        imgPerso.src = "../Images/Personnages/kamisato-ayaka2.jpg";
    }
    if (item.nom[0]+item.nom[1] == "KaedeharaKazuha") {
        imgPerso.src = "../Images/Personnages/kazuha-kaedehara2.jpg";
    }
    if (item.nom == "Zhongli") {
        imgPerso.src = "../Images/Personnages/zhongli2.png";
    }
    if (item.nom == "Yoimiya") {
        imgPerso.src = "../Images/Personnages/yoimiya2.jpg";
    }
    if (item.nom == "Razor") {
        imgPerso.src = "../Images/Personnages/razor2.jpg";
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
        imgElement.src = "../Images/Elements/pyro-element.png";
        divCover.style.backgroundColor = "#FC4F4Fb3";
    }
    if (item.classe == "Hydro") {
        imgElement.src = "../Images/Elements/hydro-element.png";
        divCover.style.backgroundColor = "#009DAEb3";
    }
    if (item.classe == "Électro") {
        imgElement.src = "../Images/Elements/electro-element.png";
        divCover.style.backgroundColor = "#9b59b6b3";
    }
    if (item.classe == "Géo") {
        imgElement.src = "../Images/Elements/geo-element.png";
        divCover.style.backgroundColor = "#FFBD35b3"
    }
    if (item.classe == "Anémo") {
        imgElement.src = "../Images/Elements/anemo-element.png";
        divCover.style.backgroundColor = "#A3DA8Db3"
    }
    if (item.classe == "Cryo") {
        imgElement.src = "../Images/Elements/cryo-element.png";
        divCover.style.backgroundColor = "#C8F2EFb3"
    }
    
    // Création de la div avec pour classe "name" contenant deux span pour séparer le nom s'il est en deux partie
    let divName = document.createElement('div');
    divName.classList.add("name");

    // Création du span avec pour classe "last"
    let spanLast = document.createElement('span');
    spanLast.classList.add("last");
    // si item.nom[1] existe alors affiche le dans la spanLast
    if (item.nom[1]) {
        spanLast.innerHTML = item.nom[1];
    }
    
    // Création du span avec pour classe "first"
    let spanFirst = document.createElement('span');
    spanFirst.classList.add("first");
    spanFirst.innerHTML = item.nom[0];

    // Création de la div avec pour classe "card-body"
    let divCardBody = document.createElement('div');
    divCardBody.classList.add("card-body");

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
    divCardFooter.classList.add("cardFooter");

    // Création du a avec pour classe "btn-a btn1" puis ajout de l'attribut href avec pour valeur le chemin vers la page modif perso
    // et ajout dans l'url d'un paramètre perso=i pour définir un index que l'on utilisera si on veut modifier le personnage et ajout du texte pour le bouton
    let a1 = document.createElement('a');
    a1.classList.add("btn-a", "btn1");   
    a1.setAttribute("href", "../html/modifPerso.html?perso="+i);
    a1.innerHTML = "Modifier";

    // Création du a avec pour classe "btn-a btn2" puis ajout de l'attribut onclick avec pour valeur 
    // la fonction supPerso(i) pour définir un index que l'on utilisera si on veut supprimer le personnage et ajout du texte pour le bouton
    let a2 = document.createElement('a');
    a2.classList.add("btn-a", "btn2");
    a2.innerHTML = "Supprimer";
    

    // ajouts des éléments dans l'html
    cardContainer.appendChild(divCard);
    divCard.appendChild(divTopCard);
    divTopCard.appendChild(imgPerso);
    divTopCard.appendChild(divCover);
    divTopCard.appendChild(divElement);
    divElement.appendChild(imgElement);
    divTopCard.appendChild(divName);
    divName.appendChild(spanLast);
    divName.appendChild(spanFirst);
    divCard.appendChild(divCardBody);
    // divCardBody.appendChild(fichePerso);  // appendChild de l'alternative pour créer les p
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