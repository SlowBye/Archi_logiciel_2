interface ServiceLivre {

    // Récupérer la liste de tous les livres
    function getListLivres();

    // Récupérer un livre par son ID
    function getLivreById(Long id);

    // Ajouter un nouveau livre (lié à la méthode create du repository)
    function createLivre(DTOLivreRequest livre);

    // Mettre à jour un livre par son ID (lié à la méthode update du repository)
    function updateLivre(Long id, DTOLivreRequest livre);

    // Supprimer un livre par son ID
    function deleteLivreById(Long id);

    // Vérifier l'existence d'un livre par son ID
    function existsLivreById(Long id);
}
