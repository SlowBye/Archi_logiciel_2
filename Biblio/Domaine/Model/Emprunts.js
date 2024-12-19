class Emprunt {
    constructor(id, utilisateur, livre, dateEmprunt, dateRetour) {
        this.id = id; // Identifiant de l'emprunt
        this.utilisateur = utilisateur; // L'utilisateur qui emprunte le livre
        this.livre = livre; // Le livre emprunté
        this.dateEmprunt = dateEmprunt; // Date de l'emprunt
        this.dateRetour = dateRetour; // Date de retour prévue
    }
}