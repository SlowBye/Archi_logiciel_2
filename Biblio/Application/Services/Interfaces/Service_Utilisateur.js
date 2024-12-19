interface ServiceUtilisateur {

    // Récupérer la liste de tous les utilisateurs
    function getListUtilisateurs();

    // Récupérer un utilisateur par son ID
    function getUtilisateurById(Long id);

    // Ajouter un nouvel utilisateur (lié à la méthode save du repository)
    function createUtilisateur(DTOUtilisateurRequest utilisateur);

    // Mettre à jour un utilisateur par son ID (lié à la méthode update du repository)
    function updateUtilisateur(Long id, DTOUtilisateurRequest utilisateur);

    // Supprimer un utilisateur par son ID
    function deleteUtilisateurById(Long id);

    // Vérifier l'existence d'un utilisateur par son ID
    function existsUtilisateurById(Long id);

    // Rechercher un utilisateur par son nom
    function getUtilisateurByName(String name);
}
