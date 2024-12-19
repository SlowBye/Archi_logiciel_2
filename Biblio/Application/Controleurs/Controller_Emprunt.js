class ControleurEmprunt {

    // URL: POST /api/emprunts
    // Fonction pour enregistrer un emprunt (livre emprunté par un utilisateur)
    function createEmprunt(EmpruntRequest empruntRequest) {
        return EmpruntResponse = serviceEmprunt.createEmprunt(empruntRequest);
    }

    // URL: DELETE /api/emprunts/{id}
    // Fonction pour retourner un livre (annuler l'emprunt)
    function returnLivre(Long id) {
        serviceEmprunt.returnLivre(id);
        return "Livre retourné avec succès";
    }

    // URL: GET /api/emprunts/utilisateur/{utilisateurId}
    // Fonction pour afficher les livres empruntés par un utilisateur
    function getLivresEmpruntesByUtilisateur(Long utilisateurId) {
        return EmpruntResponse[] = serviceEmprunt.getLivresEmpruntesByUtilisateur(utilisateurId);
    }

    // URL: GET /api/emprunts/disponibilite/{livreId}
    // Fonction pour vérifier la disponibilité d'un livre avant un emprunt
    function checkDisponibilite(Long livreId) {
        return Boolean = serviceEmprunt.checkDisponibilite(livreId);
    }
}
