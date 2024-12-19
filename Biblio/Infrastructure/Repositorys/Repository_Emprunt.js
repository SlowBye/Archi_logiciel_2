// Fonction pour enregistrer un emprunt dans la base de données
interface RepositoryEmprunts extends JpaRepository {
   // Enregistrer un emprunt
   function save(Emprunt emprunt);

   // Récupérer un emprunt par son ID
   function findById(Long id);

   // Récupérer tous les emprunts
   function findAll();

   // Trouver les emprunts d'un utilisateur
   function findByUtilisateurId(Long utilisateurId);

   // Vérifier si un livre est déjà emprunté
   function existsByLivreIdAndDateRetourIsNull(Long livreId);

   // Retourner un livre (mettre à jour la date de retour)
   function returnLivre(Long id);
}