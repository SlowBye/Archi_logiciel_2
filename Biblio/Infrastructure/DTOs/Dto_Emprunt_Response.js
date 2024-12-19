class DTOEmpruntResponse {
    constructor(id, utilisateurNom, livreTitre, dateEmprunt, dateRetour) {
        this.id = id; // Identifiant de l'emprunt
        this.utilisateurNom = utilisateurNom; // Nom de l'utilisateur
        this.livreTitre = livreTitre; // Titre du livre emprunté
        this.dateEmprunt = dateEmprunt; // Date de l'emprunt
        this.dateRetour = dateRetour; // Date de retour prévue
    }
}
