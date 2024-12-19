class DTOEmpruntRequest {
    constructor(utilisateurId, livreId, dateEmprunt) {
        this.utilisateurId = utilisateurId; // Identifiant de l'utilisateur
        this.livreId = livreId; // Identifiant du livre
        this.dateEmprunt = dateEmprunt; // Date d'emprunt
    }
}
