class ControleurLivre {
    // URL: GET /api/livres
    // Fonction pour afficher une liste des livres
    function getListLivres() {
        return DtoLivreResponse[] = serviceLivre.getListLivres();
    }

    // URL: GET /api/livres/{id}
    // Fonction pour récupérer un livre par ID
    function getLivreById(Long id) {
        return DtoLivreResponse = serviceLivre.getLivreById(id);
    }

    // URL: POST /api/livres
    // Fonction pour créer un nouveau livre
    function createLivre(Livre livre) {
        return DtoLivreResponse = serviceLivre.createLivre(livre);
    }

    // URL: PUT /api/livres/{id}
    // Fonction pour mettre à jour un livre existant
    function updateLivre(Long id, Livre livre) {
        return DtoLivreResponse = serviceLivre.updateLivre(id, livre);
    }

    // URL: DELETE /api/livres/{id}
    // Fonction pour supprimer un livre par ID
    function deleteLivreById(Long id) {
        serviceLivre.deleteLivreById(id);
        return "Livre supprimé avec succès";
    }

    // URL: GET /api/livres/exists/{id}
    // Fonction pour vérifier l'existence d'un livre par son ID
    function existsLivreById(Long id) {
        return Boolean = serviceLivre.existsLivreById(id);
    }
}
