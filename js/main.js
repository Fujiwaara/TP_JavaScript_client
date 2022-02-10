// Stockage dans personnages la fonction recup qui contient donc le tableau personnages avec les objets personnage s'ils existent
let personnages = recupListePersos();

// Boucle pour afficher les objets personnage contenu dans le tableau personnages sous forme de carte
for (let i = 0; i < personnages.length; i++) {
    const element = personnages[i];
    createCard(element, i);  
}