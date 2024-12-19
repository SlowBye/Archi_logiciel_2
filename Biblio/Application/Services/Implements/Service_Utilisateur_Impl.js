class ServiceUtilisateurImpl extends ServiceUtilisateur {

    // Récupérer la liste de tous les utilisateurs
    function getListUtilisateurs() {
        return DtoUtilisateurResponse[] = RepositoryUtilisateur.findAll();
    }

    // Récupérer un utilisateur par son ID
    function getUtilisateurById(Long id) {
        return DtoUtilisateurResponse = RepositoryUtilisateur.findById(id);
    }

    // Ajouter un nouvel utilisateur
    function createUtilisateur(DTOUtilisateurRequest utilisateur) {
        return DtoUtilisateurResponse = RepositoryUtilisateur.save(utilisateur);
    }

    // Mettre à jour un utilisateur par son ID
    function updateUtilisateur(Long id, DTOUtilisateurRequest utilisateur) {
        return DtoUtilisateurResponse = RepositoryUtilisateur.update(id, utilisateur);
    }

    // Supprimer un utilisateur par son ID
    function deleteUtilisateurById(Long id) {
        RepositoryUtilisateur.deleteById(id);
    }

    // Vérifier l'existence d'un utilisateur par son ID
    function existsUtilisateurById(Long id) {
        return Boolean = RepositoryUtilisateur.existsById(id);
    }

    // Rechercher un utilisateur par son nom
    function getUtilisateurByName(String name) {
        return DtoUtilisateurResponse[] = RepositoryUtilisateur.findByName(name);
    }
}
