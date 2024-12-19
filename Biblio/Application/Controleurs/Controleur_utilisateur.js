class ControleurUtilisateur {
    // URL: GET /api/utilisateurs
    // Fonction pour afficher une liste des utilisateurs
    function getListUtilisateurs() {
        return DtoUtilisateurResponse[] = serviceUtilisateur.getListUtilisateurs();
    }

    // URL: GET /api/utilisateurs/{id}
    // Fonction pour récupérer un utilisateur par ID
    function getUtilisateurById(Long id) {
        return DtoUtilisateurResponse = serviceUtilisateur.getUtilisateurById(id);
    }

    // URL: POST /api/utilisateurs
    // Fonction pour créer un nouvel utilisateur
    function createUtilisateur(DTOUtilisateurRequest utilisateurRequest) {
        return DtoUtilisateurResponse = serviceUtilisateur.createUtilisateur(utilisateurRequest);
    }

    // URL: PUT /api/utilisateurs/{id}
    // Fonction pour mettre à jour un utilisateur existant
    function updateUtilisateur(Long id, DTOUtilisateurRequest utilisateurRequest) {
        return DtoUtilisateurResponse = serviceUtilisateur.updateUtilisateur(id, utilisateurRequest);
    }

    // URL: DELETE /api/utilisateurs/{id}
    // Fonction pour supprimer un utilisateur par ID
    function deleteUtilisateurById(Long id) {
        serviceUtilisateur.deleteUtilisateurById(id);
        return "Utilisateur supprimé avec succès";
    }

    // URL: GET /api/utilisateurs/exists/{id}
    // Fonction pour vérifier l'existence d'un utilisateur par son ID
    function existsUtilisateurById(Long id) {
        return Boolean = serviceUtilisateur.existsUtilisateurById(id);
    }

    // URL: GET /api/utilisateurs/name/{name}
    // Fonction pour rechercher un utilisateur par son nom
    function getUtilisateurByName(String name) {
        return DtoUtilisateurResponse[] = serviceUtilisateur.getUtilisateurByName(name);
    }
}






