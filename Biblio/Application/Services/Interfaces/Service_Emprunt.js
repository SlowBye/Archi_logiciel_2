class ServiceEmprunt {

    // Enregistrer un emprunt
    function emprunterLivre(DTOEmpruntRequest empruntRequest);

    // Retourner un livre
    function retournerLivre(Long id);

    // Afficher les livres empruntés par un utilisateur
    function getLivresEmpruntesByUtilisateur(Long utilisateurId);

    // Vérifier si un livre est disponible pour emprunt
    function isLivreDisponible(Long livreId);
}
