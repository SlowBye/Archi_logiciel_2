interface RepositoryLivres extends JpaRepository {

    // Trouver tous les livres
    function findAll();

    // Trouver un livre par son ID
    function findById(Long id);

    // Créer un nouveau livre
    function create(Livre livre); // Pseudo-méthode pour création explicite

    // Mettre à jour un livre par son ID
    function updateById(Long id, Livre livre); // Pseudo-méthode pour mise à jour explicite

    // Supprimer un livre par son ID
    function deleteById(Long id);

    // Vérifier l'existence d'un livre par son ID
    function existsById(Long id);

    // Supprimer un livre directement
    function delete(Livre livre);

    // Supprimer tous les livres
    function deleteAll();
}
