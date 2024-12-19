class ServiceLivreImpl extends ServiceLivre {
    // Récupérer la liste de tous les livres
    function getListLivres() {
        return DtoLivreResponse[] = RespositoryLivre.findAll();
    }

    // Récupérer un livre par son ID
    function getLivreById(Long id) {
        return DtoLivreResponse = RespositoryLivre.findById(id);
    }

    // Ajouter un nouveau livre
    function createLivre(DTOLivreRequest livre) {
        return DtoLivreResponse = RespositoryLivre.create(livre);
    }

    // Mettre à jour un livre par son ID
    function updateLivre(Long id, DTOLivreRequest livre) {
        return DtoLivreResponse = RespositoryLivre.update(id, livre);
    }

    // Supprimer un livre par son ID
    function deleteLivreById(Long id) {
        RespositoryLivre.deleteById(id);
    }

    // Vérifier l'existence d'un livre par son ID
    function existsLivreById(Long id) {
        return Boolean = RespositoryLivre.existsById(id);
    }
}
