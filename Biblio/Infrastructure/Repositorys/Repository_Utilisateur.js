
interface RepositoryUtilisateur {

    // Ajouter un nouvel utilisateur
    function save(Utilisateur utilisateur);

    // Modifier un utilisateur existant
    function update(Long id, Utilisateur utilisateur);

    // Supprimer un utilisateur par son identifiant
    function deleteById(Long id);

    // Consulter la liste de tous les utilisateurs
    function findAll();

    // Rechercher un utilisateur par son identifiant
    function findById(Long id);

    // Rechercher un utilisateur par son nom
    function findByName(String name);

}