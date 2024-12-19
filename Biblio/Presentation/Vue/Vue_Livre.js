// Affichage de l'interface pour ajouter un livre
function afficherFormulaireAjoutLivre() {
    // Affiche le formulaire pour saisir les informations du livre
    afficherTitre("Ajouter un Livre");
    afficherChampsTexte("Titre", "Auteur", "Annee");
    afficherBouton("Ajouter", soumettreFormulaireAjoutLivre);
}

// Soumettre le formulaire d'ajout de livre
function soumettreFormulaireAjoutLivre(titre, auteur, annee) {
    // Appeler la couche Application pour ajouter le livre
    AjoutLivre(titre, auteur, annee);
}

// Afficher l'interface pour modifier un livre
function afficherFormulaireModificationLivre() {
    // Affiche le formulaire pour saisir les informations du livre
    afficherTitre("Modifier un Livre");
    afficherChampsTexte("ID", "Titre", "Auteur", "Annee");
    afficherBouton("Modifier", soumettreFormulaireModificationLivre);
}

// Soumettre le formulaire de modification de livre
function soumettreFormulaireModificationLivre(id, titre, auteur, annee) {
    // Appeler la couche Application pour modifier le livre
    ModifierLivre(id, titre, auteur, annee);
}

// Afficher l'interface pour supprimer un livre
function afficherFormulaireSuppressionLivre() {
    // Affiche le formulaire pour saisir l'ID du livre
    afficherTitre("Supprimer un Livre");
    afficherChampsTexte("ID");
    afficherBouton("Supprimer", soumettreFormulaireSuppressionLivre);
}

// Soumettre le formulaire de suppression de livre
function soumettreFormulaireSuppressionLivre(id) {
    // Appeler la couche Application pour supprimer le livre
    return SupprimerLivre(id);
}

// Afficher la liste des livres
function afficherListeLivres(livres) {
    return getListLivres();
}

// Rechercher un livre par titre ou auteur
function rechercherLivre(titre, auteur) {
    // Appeler la couche Application pour rechercher le livre
    return RechercherLivre(titre, auteur);
}


// Afficher l'interface pour emprunter un livre
function afficherFormulaireEmpruntLivre() {
    // Affiche le formulaire pour saisir les informations de l'emprunt
    afficherTitre("Emprunter un Livre");
    // Verification de la disponibilite du livre et si l'utilisateur peut emprunter
    if (verifierDisponibiliteLivre(livreID)) {
        // Verification si l'utilisateur a atteint le nombre maximum d'emprunts
        if(verifierUtilisateurEmpruntMax(utilisateurID)){
            return afficherMessageErreur("L'utilisateur a atteint le nombre maximum d'emprunts.");   
        }
        afficherChampsTexte("ID Utilisateur", "ID Livre");
        afficherBouton("Emprunter", soumettreFormulaireEmpruntLivre);
    }
    else {
        return afficherMessageErreur("Le livre n'est pas disponible.");
    }
}

// Soumettre le formulaire d'emprunt de livre
function soumettreFormulaireEmpruntLivre(utilisateurID, livreID) {
    // Appeler la couche Application pour emprunter le livre
    return EmprunterLivre(utilisateurID, livreID);
}
