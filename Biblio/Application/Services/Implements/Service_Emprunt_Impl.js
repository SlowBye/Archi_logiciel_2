class ServiceEmpruntImpl extends ServiceEmprunt {

    // Enregistrer un emprunt (livre emprunté par un utilisateur)
    function createEmprunt(EmpruntRequest empruntRequest) {
        return EmpruntResponse = RepositoryEmprunt.save(empruntRequest);
    }

    // Retourner un livre (annuler l'emprunt)
    function returnLivre(Long id) {
        RepositoryEmprunt.deleteById(id);
    }

    // Afficher les livres empruntés par un utilisateur
    function getLivresEmpruntesByUtilisateur(Long utilisateurId) {
        return EmpruntResponse[] = RepositoryEmprunt.findByUtilisateurId(utilisateurId);
    }

    // Empêcher un emprunt si le livre n’est pas disponible
    function checkDisponibilite(Long livreId) {
        return Boolean = RepositoryEmprunt.existsByLivreIdAndDisponible(livreId, true);
    }
}
